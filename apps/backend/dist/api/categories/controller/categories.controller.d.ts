import { CategoriesService } from '@/api/categories/service/categories.service';
import { CreateCategoryDto } from '@/api/categories/dto/create-category.dto';
import { UpdateCategoryDto } from '@/api/categories/dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("../entities/category.entity").Category>;
    findAll(): Promise<import("../entities/category.entity").Category[]>;
    findOne(id: string): Promise<import("../entities/category.entity").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("../entities/category.entity").Category>;
    remove(id: string): string;
}
