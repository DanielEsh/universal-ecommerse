import { CreateGoodDto } from '@/api/goods/dto/create-good.dto';
import { UpdateGoodDto } from '@/api/goods/dto/update-good.dto';
export declare class GoodsService {
    create(createGoodDto: CreateGoodDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGoodDto: UpdateGoodDto): string;
    remove(id: number): string;
}
