import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BrandsService } from '@/api/brands/service/brands.service';
import { CreateBrandDto } from '@/api/brands/dto/create-brand.dto';
import { UpdateBrandDto } from '@/api/brands/dto/update-brand.dto';


@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  createBrand(@Body() body: CreateBrandDto) {
    return this.brandsService.create(body);
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOneBrand(@Param('id') id: string) {
    return this.brandsService.findOne(+id);
  }

  @Put(':id')
  updateBrand(
      @Param('id') id: string,
      @Body() body: UpdateBrandDto,
  ) {
    return this.brandsService.update(+id, body);
  }

  @Delete(':id')
  deleteBrand(@Param('id') id: string) {
    return this.brandsService.delete(+id);
  }
}
