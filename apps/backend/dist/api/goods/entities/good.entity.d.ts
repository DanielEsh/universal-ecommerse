import { BaseEntity } from 'typeorm';
export declare class Good extends BaseEntity {
    id: number;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}
