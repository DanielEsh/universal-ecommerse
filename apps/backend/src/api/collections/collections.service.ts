import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collection } from '@/api/collections/collections.entity';

interface Pagination {
  totalItemsCount: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  previous: number | null;
  next: number | null;
}

export interface Meta {
  pagination: Pagination;
}

@Injectable()
export class CollectionService {
  @InjectRepository(Collection)
  private readonly repository: Repository<Collection>;

  async create(body: any) {
    const newModel = new Collection();

    newModel.slug = body.slug;
    newModel.name = body.name;
    newModel.description = '';
    newModel.goodsCount = 0;

    return await this.repository.save(newModel);
  }

  async findAll(options) {
    const builder = await this.repository.createQueryBuilder('collections');

    return this.paginate(builder, options);
  }

  private async paginate(builder, options) {
    const { limit = 10, page = 1 } = options;

    builder.limit(limit);
    builder.offset((page - 1) * limit);

    const totalItemsCount = await builder.getCount();
    const items = await builder
      .select('collections.id')
      .addSelect('collections.slug')
      .addSelect('collections.name')
      .addSelect('collections.goodsCount')
      .getMany();

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

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, body: any) {
    const model = await this.findOne(id);

    model.slug = body?.slug || model.slug;
    model.name = body?.name || model.name;
    model.description = body.description || model.description;

    return this.repository.save(model);
  }

  async remove(id: number) {
    await this.repository.delete({ id });
  }
}
