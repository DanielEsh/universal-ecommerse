import { Controller, Get } from '@nestjs/common';
import { BrandsService } from '@/api/brands/service/brands.service';
import { Brand } from '@/api/brands/entities/brand.entity';
import { CreateBrandDto } from '@/api/brands/dto/create-brand.dto';
import { UpdateBrandDto } from '@/api/brands/dto/update-brand.dto';


@Controller('brands')
export class BrandsController {
  constructor(public service: BrandsService) {}

  @Get()
  findAll() {
    return BrandsService.findAll();
  }
}
