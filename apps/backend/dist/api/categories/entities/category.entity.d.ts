import { BaseEntity } from 'typeorm';
export declare class Category extends BaseEntity {
    id: number;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}
