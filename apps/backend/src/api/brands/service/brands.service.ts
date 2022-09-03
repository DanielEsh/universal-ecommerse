import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";
import { Brand } from '@/api/brands/entities/brand.entity';
import {CreateBrandDto} from "@/api/brands/dto/create-brand.dto";
import {UpdateBrandDto} from "@/api/brands/dto/update-brand.dto";

@Injectable()
export class BrandsService {
  @InjectRepository(Brand)
  private readonly brandRepository: Repository<Brand>;

  public async findAll(search, sort, options) {
    const builder = await this.brandRepository.createQueryBuilder('brands');

    if (search) {
      builder.where("brands.name LIKE :s OR brands.description LIKE :s", {s: `%${search}%`})
    }

    if (sort) {
      builder.orderBy('brands.id', 'ASC');
    }

    return this.paginate(builder, options);
  }

  private async paginate(builder, options) {
    const {limit, page} = options
    builder.limit(limit)
    builder.offset((page - 1) * limit)
    const totalItemsCount = await builder.getCount();
    const items = await builder.getMany()
    const totalPages = totalItemsCount !== undefined ? Math.ceil(totalItemsCount / limit) : undefined;
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1

    const routes =
        totalItemsCount
            ? {
              previous: hasPreviousPage
                  ? page - 1
                  : null,
              next: hasNextPage
                  ? page + 1
                  : null,
            }
            : undefined;

    const meta = {
      totalItemsCount,
      itemCount: items.length,
      itemsPerPage: limit,
      totalPages,
      currentPage: page,
      previous: routes.previous,
      next: routes.next,
    }

    return {
      items,
      meta,
    }
  }

  public create(body: CreateBrandDto) {
    const newBrand = new Brand();

    newBrand.name = body.name;
    newBrand.description = body?.description;

    return this.brandRepository.save(newBrand);
  }

  public findOne(id: number) {
    return this.brandRepository.findOne({ where: { id } });
  }

  public async update(id: number, body: UpdateBrandDto) {
    const category = await this.findOne(id);

    category.name = body?.name || category.name;
    category.description = body.description || category.description;

    return this.brandRepository.save(category);
  }

  public async delete(id: number) {
    await this.brandRepository.delete({ id });
  }
}
