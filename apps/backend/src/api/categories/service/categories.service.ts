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
    return this.categoryRepository.findOne({ where: { id } });
  }

  async update(id: number, body: UpdateCategoryDto) {
    const category = await this.findOne(id);

    category.name = body?.name || category.name;
    category.description = body.description || category.description;

    return this.categoryRepository.save(category);
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
