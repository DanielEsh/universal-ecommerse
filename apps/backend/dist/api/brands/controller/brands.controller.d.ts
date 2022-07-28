import { BrandsService } from '@/api/brands/service/brands.service';
import { CreateBrandDto } from '@/api/brands/dto/create-brand.dto';
import { UpdateBrandDto } from '@/api/brands/dto/update-brand.dto';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    create(createBrandDto: CreateBrandDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBrandDto: UpdateBrandDto): string;
    remove(id: string): string;
}
