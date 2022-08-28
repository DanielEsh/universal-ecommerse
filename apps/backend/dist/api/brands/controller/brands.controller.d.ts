import { BrandsService } from '@/api/brands/service/brands.service';
export declare class BrandsController {
    service: BrandsService;
    constructor(service: BrandsService);
    findAll(): string;
}
