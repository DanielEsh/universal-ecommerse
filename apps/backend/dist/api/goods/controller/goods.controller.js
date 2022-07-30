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
exports.GoodsController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const goods_service_1 = require("../service/goods.service");
const good_entity_1 = require("../entities/good.entity");
let GoodsController = class GoodsController {
    constructor(service) {
        this.service = service;
    }
    test() {
        return this.service.test();
    }
};
__decorate([
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoodsController.prototype, "test", null);
GoodsController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: good_entity_1.Good,
        },
    }),
    (0, common_1.Controller)('goods'),
    __metadata("design:paramtypes", [goods_service_1.GoodsService])
], GoodsController);
exports.GoodsController = GoodsController;
//# sourceMappingURL=goods.controller.js.map