import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Good } from '@/api/goods/entities/good.entity';
export declare class GoodsService extends TypeOrmCrudService<Good> {
    constructor(repo: any);
    test(): Promise<Good[]>;
}
