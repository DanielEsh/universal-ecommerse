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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthHelper = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
const user_entity_1 = require("../../user/user.entity");
const config_1 = require("@nestjs/config");
let AuthHelper = class AuthHelper {
    constructor(jwt, config) {
        this.jwt = jwt;
        this.config = config;
    }
    async decode(token) {
        return this.jwt.decode(token, null);
    }
    async validateUser(decoded) {
        console.log('validateUser', decoded);
        return this.userRepository.findOne(decoded.id);
    }
    generateAccessToken(user) {
        return this.jwt.sign({
            id: user.id,
            email: user.email,
            name: user.name
        }, {
            secret: this.config.get('JWT_ACCESS_KEY'),
            expiresIn: 60,
        });
    }
    generateRefreshToken(user) {
        return this.jwt.sign({
            id: user.id,
            email: user.email,
            name: user.name
        }, {
            secret: this.config.get('JWT_REFRESH_KEY'),
            expiresIn: 60 * 60 * 24 * 7,
        });
    }
    isPasswordValid(password, userPassword) {
        return bcrypt.compareSync(password, userPassword);
    }
    encodePassword(password) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }
    async validate(token) {
        const decoded = this.jwt.verify(token);
        if (!decoded) {
            throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
        }
        const user = await this.validateUser(decoded);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], AuthHelper.prototype, "userRepository", void 0);
AuthHelper = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], AuthHelper);
exports.AuthHelper = AuthHelper;
//# sourceMappingURL=auth.helper.js.map