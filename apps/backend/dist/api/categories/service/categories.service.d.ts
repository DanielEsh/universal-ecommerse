import { CreateCategoryDto } from '@/api/categories/dto/create-category.dto';
import { UpdateCategoryDto } from '@/api/categories/dto/update-category.dto';
import { Category } from '@/api/categories/entities/category.entity';
export declare class CategoriesService {
    private readonly categoryRepository;
    create(body: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): string;
    update(id: number, updateCategoryDto: UpdateCategoryDto): string;
    remove(id: number): string;
}
