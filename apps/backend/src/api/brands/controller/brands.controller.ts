import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { BrandsService } from '@/api/brands/service/brands.service';
import { Brand } from '@/api/brands/entities/brand.entity';

@Crud({
  model: {
    type: Brand,
  },
})
@Controller('brands')
export class BrandsController implements CrudController<Brand> {
  constructor(public service: BrandsService) {}
}
