import { CreateCategoryDto } from '@/api/categories/dto/create-category.dto';
import { UpdateCategoryDto } from '@/api/categories/dto/update-category.dto';
import { Category } from '@/api/categories/entities/category.entity';
export declare class CategoriesService {
    private readonly categoryRepository;
    create(body: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    update(id: number, body: UpdateCategoryDto): Promise<Category>;
    remove(id: number): Promise<void>;
}
