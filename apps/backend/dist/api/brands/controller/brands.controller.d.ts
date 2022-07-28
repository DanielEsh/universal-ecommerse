import { CrudController } from '@nestjsx/crud';
import { BrandsService } from '@/api/brands/service/brands.service';
import { Brand } from '@/api/brands/entities/brand.entity';
export declare class BrandsController implements CrudController<Brand> {
    service: BrandsService;
    constructor(service: BrandsService);
}
