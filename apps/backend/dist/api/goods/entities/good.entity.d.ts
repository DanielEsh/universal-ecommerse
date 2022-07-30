import { BaseEntity } from 'typeorm';
import { Brand } from '@/api/brands/entities/brand.entity';
export declare class Good extends BaseEntity {
    id: number;
    name: string;
    description: string;
    brand: Brand;
    created_at: Date;
    updated_at: Date;
}
