import { BaseEntity } from 'typeorm';
import { Good } from '@/api/goods/entities/good.entity';
export declare class Brand extends BaseEntity {
    id: number;
    name: string;
    description: string;
    goods: Good[];
    created_at: Date;
    updated_at: Date;
}
