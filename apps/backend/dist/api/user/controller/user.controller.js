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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const user_service_1 = require("../service/user.service");
const roles_decorator_1 = require("../../auth/roles.decorator");
const roles_enum_1 = require("../../auth/roles.enum");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const updateDto_1 = require("../dto/updateDto");
const createDto_1 = require("../dto/createDto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll(req) {
        return this.userService.findAll();
    }
    async create(body) {
        return await this.userService.create(body);
    }
    getById(id) {
        return this.userService.findById(id);
    }
    async updateById(id, body) {
        await this.userService.updateUserById(id, body);
        return 'Success update';
    }
    async deleteUser(id) {
        await this.userService.delete(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: `User deleted successfully`,
        };
    }
    getProfile(req) {
        const { user } = req;
        return this.userService.findById(user.id);
    }
    guest(req) {
        const { user } = req;
        return 'Guest route';
    }
    admin(req) {
        const { user } = req;
        return 'Admin route';
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AccessJwtAuthGuard),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDto_1.CreateDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateDto_1.UpdateDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AccessJwtAuthGuard),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('guest'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "guest", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.AccessJwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('admin'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "admin", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map