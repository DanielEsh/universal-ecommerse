"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../user/service/user.service");
const auth_helper_1 = require("../helpers/auth.helper");
const cookie_1 = require("../../../utils/cookie");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async validateUser(username, pass) {
        const user = await this.usersService.findUserByEmailOrName(username);
        if (!user) {
            throw new common_1.HttpException('No user found', common_1.HttpStatus.NOT_FOUND);
        }
        const isPasswordValid = this.authHelper.isPasswordValid(pass, user.password);
        if (!isPasswordValid) {
            throw new common_1.HttpException('password is not valid', common_1.HttpStatus.NOT_FOUND);
        }
        const { password, lastLoginAt } = user, result = __rest(user, ["password", "lastLoginAt"]);
        return result;
    }
    async signIn(user, res) {
        const accessToken = await this.authHelper.generateAccessToken(user);
        const refreshToken = await this.authHelper.generateRefreshToken(user);
        await this.usersService.updateRefreshTokenHash(user.id, refreshToken);
        res.cookie('token', accessToken, cookie_1.cookieOptions);
        return {
            accessToken,
            refreshToken
        };
    }
    async refresh(userId, refreshToken, res) {
        const user = await this.usersService.findById(userId);
        if (!user)
            throw new common_1.ForbiddenException('Access denied');
        const matchTokens = await bcrypt.compare(refreshToken, user.hashedRefreshToken);
        if (!matchTokens)
            throw new common_1.ForbiddenException('Access denied');
        const accessToken = await this.authHelper.generateAccessToken(user);
        res.cookie('token', accessToken, cookie_1.cookieOptions);
        return {
            accessToken,
        };
    }
    async logout(userId, response) {
        response.clearCookie('accessToken');
        response.clearCookie('refreshToken');
        await this.usersService.updateUserById(userId, {
            hashedRefreshToken: null
        });
    }
};
__decorate([
    (0, common_1.Inject)(auth_helper_1.AuthHelper),
    __metadata("design:type", auth_helper_1.AuthHelper)
], AuthService.prototype, "authHelper", void 0);
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map