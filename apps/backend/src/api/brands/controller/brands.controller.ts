import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { BrandsService } from '@/api/brands/service/brands.service';
import { Brand } from '@/api/brands/entities/brand.entity';
import { CreateBrandDto } from '@/api/brands/dto/create-brand.dto';

@Crud({
  model: {
    type: Brand,
  },
  query: {
    alwaysPaginate: true,
  },
  serialize: {
    create: CreateBrandDto,
  },
})
@Controller('brands')
export class BrandsController implements CrudController<Brand> {
  constructor(public service: BrandsService) {}
}
