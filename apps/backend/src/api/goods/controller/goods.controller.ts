import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { GoodsService } from '@/api/goods/service/goods.service';
import { Good } from '@/api/goods/entities/good.entity';

@Crud({
  model: {
    type: Good,
  },
})
@Controller('goods')
export class GoodsController implements CrudController<Good> {
  constructor(public service: GoodsService) {}
}
