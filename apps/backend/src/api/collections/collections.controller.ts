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
  NotFoundException,
} from '@nestjs/common';
import { CollectionService } from '@/api/collections/collections.service';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionService) {}

  @Post()
  create(@Body() createCategoryDto: any) {
    return this.collectionsService.create(createCategoryDto);
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.collectionsService.findAll({
      page,
      limit,
      route: ' ',
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const item = await this.collectionsService.findOne(+id);

    if (!item) throw new NotFoundException();
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
