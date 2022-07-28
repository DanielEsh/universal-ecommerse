import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Brand } from '@/api/brands/entities/brand.entity';
export declare class BrandsService extends TypeOrmCrudService<Brand> {
    constructor(repo: any);
}
