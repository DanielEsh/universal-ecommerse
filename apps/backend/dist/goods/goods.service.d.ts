import { Repository } from 'typeorm';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { Good } from './entities/good.entity';
export declare class GoodsService {
    private goodsRepository;
    constructor(goodsRepository: Repository<Good>);
    findAll(): Promise<Good[]>;
    findOne(id: number): Promise<Good>;
    create(good: CreateGoodDto): Promise<Good>;
    update(id: number, good: UpdateGoodDto): Promise<Good>;
    remove(id: number): Promise<void>;
}
