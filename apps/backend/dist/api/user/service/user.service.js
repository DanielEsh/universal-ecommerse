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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user.entity");
const bcrypt = require("bcryptjs");
let UserService = class UserService {
    async findAll() {
        return await this.userRepository.find();
    }
    async findUserByEmailOrName(payload) {
        return ((await this.userRepository.findOne({ where: { email: payload } })) ||
            this.userRepository.findOne({ where: { name: payload } }));
    }
    async findById(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async updateUserById(id, body) {
        const user = await this.findById(id);
        user.name = (body === null || body === void 0 ? void 0 : body.name) || user.name;
        user.email = (body === null || body === void 0 ? void 0 : body.email) || user.email;
        user.roles = (body === null || body === void 0 ? void 0 : body.roles) || user.roles;
        user.hashedRefreshToken =
            (body === null || body === void 0 ? void 0 : body.hashedRefreshToken) || user.hashedRefreshToken;
        return this.userRepository.save(user);
    }
    async create(body) {
        const newUser = new user_entity_1.User();
        if (!body.email && !body.password) {
            return 'Email/Password обязательные поля';
        }
        newUser.name = body === null || body === void 0 ? void 0 : body.name;
        newUser.email = body.email;
        newUser.password = this.encodePassword(body.password);
        return this.userRepository.save(newUser);
    }
    encodePassword(password) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }
    async delete(id) {
        await this.userRepository.delete({ id });
        return { deleted: true };
    }
    async updateRefreshTokenHash(userId, refreshToken) {
        const hash = await this.hashData(refreshToken);
        await this.updateUserById(userId, {
            hashedRefreshToken: hash,
        });
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], UserService.prototype, "userRepository", void 0);
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map