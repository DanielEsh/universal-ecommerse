import { Controller, Get, Post, Put, Delete, Body, Param, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Brand } from "@/api/brands/entities/brand.entity";
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
  async findAll(
      @Query('search') search,
      @Query('sort') sort,
      @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
      @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    if (search) {
      return this.brandsService.search(search);
    }

    if (sort) {
      return this.brandsService.sort(sort);
    }

    return this.brandsService.findAll({
      page,
      limit,
      route: 'http://localhost:8000/api/brands',
    });
  };

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
