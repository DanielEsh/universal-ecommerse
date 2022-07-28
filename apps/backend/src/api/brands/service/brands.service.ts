import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Brand } from '@/api/brands/entities/brand.entity';

@Injectable()
export class BrandsService extends TypeOrmCrudService<Brand> {
  constructor(@InjectRepository(Brand) repo) {
    super(repo);
  }
}
