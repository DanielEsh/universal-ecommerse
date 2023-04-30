import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  findAll() {
    return this.collectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionsService.findOne(+id);
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
