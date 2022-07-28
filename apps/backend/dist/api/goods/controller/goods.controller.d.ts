import { GoodsService } from '@/api/goods/service/goods.service';
import { CreateGoodDto } from '@/api/goods/dto/create-good.dto';
import { UpdateGoodDto } from '@/api/goods/dto/update-good.dto';
export declare class GoodsController {
    private readonly goodsService;
    constructor(goodsService: GoodsService);
    create(createGoodDto: CreateGoodDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGoodDto: UpdateGoodDto): string;
    remove(id: string): string;
}
