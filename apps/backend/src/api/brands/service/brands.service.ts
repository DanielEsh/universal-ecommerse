import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Brand } from '@/api/brands/entities/brand.entity';
import {CreateBrandDto} from "@/api/brands/dto/create-brand.dto";
import {UpdateBrandDto} from "@/api/brands/dto/update-brand.dto";

@Injectable()
export class BrandsService {
  @InjectRepository(Brand)
  private readonly brandRepository: Repository<Brand>;

  public async findAll(search, sort, options: IPaginationOptions): Promise<Pagination<Brand>> {
    const builder = await this.brandRepository.createQueryBuilder('brands');

    if (search) {
      builder.where("brands.name LIKE :s OR brands.description LIKE :s", {s: `%${search}%`})
    }

    if (sort) {
      builder.orderBy('brands.id', 'ASC');
    }

    return paginate<Brand>(builder, options);
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
