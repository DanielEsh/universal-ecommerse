"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsService = void 0;
const common_1 = require("@nestjs/common");
let GoodsService = class GoodsService {
    create(createGoodDto) {
        return 'This action adds a new good';
    }
    findAll() {
        return `This action returns all goods`;
    }
    findOne(id) {
        return `This action returns a #${id} good`;
    }
    update(id, updateGoodDto) {
        return `This action updates a #${id} good`;
    }
    remove(id) {
        return `This action removes a #${id} good`;
    }
};
GoodsService = __decorate([
    (0, common_1.Injectable)()
], GoodsService);
exports.GoodsService = GoodsService;
//# sourceMappingURL=goods.service.js.map