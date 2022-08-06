import { BaseEntity } from 'typeorm';
import { Brand } from '@/api/brands/entities/brand.entity';
import { Category } from '@/api/categories/entities/category.entity';
export declare class Good extends BaseEntity {
    id: number;
    name: string;
    description: string;
    brand: Brand;
    category: Category;
    created_at: Date;
    updated_at: Date;
}
