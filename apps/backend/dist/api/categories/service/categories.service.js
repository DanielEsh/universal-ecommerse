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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../entities/category.entity");
let CategoriesService = class CategoriesService {
    create(body) {
        const newCategory = new category_entity_1.Category();
        newCategory.name = body.name;
        newCategory.description = body === null || body === void 0 ? void 0 : body.description;
        return this.categoryRepository.save(newCategory);
    }
    async findAll() {
        return await this.categoryRepository.find();
    }
    findOne(id) {
        return this.categoryRepository.findOne({ where: { id } });
    }
    async update(id, body) {
        const category = await this.findOne(id);
        category.name = (body === null || body === void 0 ? void 0 : body.name) || category.name;
        category.description = body.description || category.description;
        return this.categoryRepository.save(category);
    }
    remove(id) {
        return `This action removes a #${id} category`;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(category_entity_1.Category),
    __metadata("design:type", typeorm_2.Repository)
], CategoriesService.prototype, "categoryRepository", void 0);
CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map