import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Good } from '@/api/goods/entities/good.entity';

@Injectable()
export class GoodsService extends TypeOrmCrudService<Good> {
  constructor(@InjectRepository(Good) repo) {
    super(repo);
  }

  async getMany() {
    return await this.repo.find({
      relations: {
        brand: true,
        category: true,
      },
    });
  }
}
