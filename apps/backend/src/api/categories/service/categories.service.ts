import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '@/api/categories/dto/create-category.dto';
import { UpdateCategoryDto } from '@/api/categories/dto/update-category.dto';
import { Category } from '@/api/categories/entities/category.entity';
import { Meta } from '@/api/collections/collections.service';

interface FindAllOptions {
  sort: [string];
  order: ['asc' | 'desc'];
  limit: number;
  page: number;
  route: string;
}

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

  async findAll(options: FindAllOptions) {
    const builder = await this.categoryRepository.createQueryBuilder(
      'category',
    );

    return this.paginate(builder, options);
  }

  private async paginate(builder, options: FindAllOptions) {
    const { limit = 10, page = 1 } = options;

    builder.limit(limit);
    builder.offset((page - 1) * limit);

    const totalItemsCount = await builder.getCount();
    const getBuilder = await builder
      .select('category.id')
      .addSelect('category.name');

    if (options.sort) {
      options.sort.map((field, index) =>
        getBuilder.orderBy(
          `category.${field}`,
          options.order.length ? options.order[index]?.toUpperCase() : 'ASC',
        ),
      );
    }

    const items = await getBuilder.getMany();

    const totalPages =
      totalItemsCount !== undefined
        ? Math.ceil(totalItemsCount / limit)
        : undefined;
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;

    const routes = {
      previous: hasPreviousPage ? page - 1 : null,
      next: hasNextPage ? page + 1 : null,
    };

    const meta: Meta = {
      pagination: {
        totalItemsCount,
        itemCount: items.length,
        itemsPerPage: limit,
        totalPages,
        currentPage: page,
        previous: routes.previous,
        next: routes.next,
      },
    };

    return {
      data: items,
      meta,
    };
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

  async remove(id: number) {
    await this.categoryRepository.delete({ id });
  }
}
