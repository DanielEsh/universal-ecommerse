import { BaseEntity } from 'typeorm';
import { Good } from '@/api/goods/entities/good.entity';
export declare class Category extends BaseEntity {
    id: number;
    name: string;
    description: string;
    goods: Good[];
    created_at: Date;
    updated_at: Date;
}
