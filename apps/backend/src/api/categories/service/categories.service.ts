import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '@/api/categories/dto/create-category.dto';
import { UpdateCategoryDto } from '@/api/categories/dto/update-category.dto';
import { Category } from '@/api/categories/entities/category.entity';

@Injectable()
export class CategoriesService {
  @InjectRepository(Category)
  private readonly categoryRepository: Repository<Category>;

  create(body: CreateCategoryDto) {
    const newCategory = new Category();

    newCategory.name = body.name;
    newCategory.description = body?.description;

    return this.categoryRepository.save(newCategory);
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
