import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { BrandsService } from '@/api/brands/service/brands.service';
import { Brand } from '@/api/brands/entities/brand.entity';
import { CreateBrandDto } from '@/api/brands/dto/create-brand.dto';
import { UpdateBrandDto } from '@/api/brands/dto/update-brand.dto';

@Crud({
  model: {
    type: Brand,
  },
  query: {
    alwaysPaginate: true,
  },
  dto: {
    create: CreateBrandDto,
    update: UpdateBrandDto,
    replace: UpdateBrandDto,
  },
})
@Controller('brands')
export class BrandsController implements CrudController<Brand> {
  constructor(public service: BrandsService) {}
}
