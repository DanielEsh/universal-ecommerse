import { BaseEntity } from 'typeorm';
export declare class Brand extends BaseEntity {
    id: number;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}
