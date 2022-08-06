import { CrudController } from '@nestjsx/crud';
import { GoodsService } from '@/api/goods/service/goods.service';
import { Good } from '@/api/goods/entities/good.entity';
export declare class GoodsController implements CrudController<Good> {
    service: GoodsService;
    constructor(service: GoodsService);
    test(): Promise<Good[]>;
}
