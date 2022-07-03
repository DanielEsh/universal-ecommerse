import { GoodsService } from './goods.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
export declare class GoodsController {
    private readonly goodsService;
    constructor(goodsService: GoodsService);
    findAll(): Promise<import("./entities/good.entity").Good[]>;
    findOne(id: number): Promise<import("./entities/good.entity").Good>;
    create(createGoodDto: CreateGoodDto): Promise<import("./entities/good.entity").Good>;
    update(id: number, updateGoodDto: UpdateGoodDto): Promise<import("./entities/good.entity").Good>;
    remove(id: number): Promise<void>;
}
