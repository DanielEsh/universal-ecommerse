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
exports.GoodsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const good_entity_1 = require("./entities/good.entity");
let GoodsService = class GoodsService {
    constructor(goodsRepository) {
        this.goodsRepository = goodsRepository;
    }
    findAll() {
        return this.goodsRepository.find();
    }
    async findOne(id) {
        return this.goodsRepository.findOneBy({ id });
    }
    async create(good) {
        const newGood = await this.goodsRepository.create(good);
        await this.goodsRepository.save(newGood);
        return newGood;
    }
    async update(id, good) {
        await this.goodsRepository.update(id, good);
        const updatedPost = await this.goodsRepository.findOne(id);
        if (updatedPost) {
            return updatedPost;
        }
        throw new common_1.HttpException('Good not found', common_1.HttpStatus.NOT_FOUND);
    }
    async remove(id) {
        const deleteResponse = await this.goodsRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new common_1.HttpException('Good not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
GoodsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(good_entity_1.Good)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GoodsService);
exports.GoodsService = GoodsService;
//# sourceMappingURL=goods.service.js.map