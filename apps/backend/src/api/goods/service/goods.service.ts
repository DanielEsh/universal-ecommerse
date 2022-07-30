import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Good } from '@/api/goods/entities/good.entity';

@Injectable()
export class GoodsService extends TypeOrmCrudService<Good> {
  constructor(@InjectRepository(Good) repo) {
    super(repo);
  }

  async test() {
    // return await this.repo.find({
    //   relations: {
    //     brand: true,
    //   },
    // });

    return await this.repo.manager.query(`
      SELECT 
        brand.name,
        good.name,
        brand.id,
        good.id
	    FROM public.good
      JOIN brand ON "brandId="brand.id
      `);
  }
}
