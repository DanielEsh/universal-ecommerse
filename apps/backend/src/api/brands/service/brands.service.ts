import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from '@/api/brands/entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(@InjectRepository(Brand) brandsRepository) {}

  static findAll() {
    return 'find all by service';
  }
}
