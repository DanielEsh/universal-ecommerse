import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  ParseArrayPipe,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CollectionService } from '@/api/collections/collections.service';

const DEFAULT_VALUES = {
  limit: 5,
  page: 1,
};

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionService) {}

  @Post()
  async create(@Body() createCategoryDto: any) {
    try {
      return await this.collectionsService.create(createCategoryDto);
    } catch (e: any) {
      console.log('ERROR', e);
      if (e.code === '23505') {
        throw new ConflictException('Slug already exist');
      }
    }
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(DEFAULT_VALUES.page), ParseIntPipe)
    page,
    @Query('limit', new DefaultValuePipe(DEFAULT_VALUES.limit), ParseIntPipe)
    limit,
    @Query('sort_by', ParseArrayPipe) sort,
    @Query('order_by', ParseArrayPipe) order,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.collectionsService.findAll({
      sort,
      order,
      page,
      limit,
      route: ' ',
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const item = await this.collectionsService.findOne(+id);

    if (!item) throw new NotFoundException();

    return item;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: any) {
    return this.collectionsService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionsService.remove(+id);
  }
}
