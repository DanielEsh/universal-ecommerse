import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collection } from '@/api/collections/collections.entity';

@Injectable()
export class CollectionService {
  @InjectRepository(Collection)
  private readonly repository: Repository<Collection>;

  create(body: any) {
    const newModel = new Collection();

    newModel.slug = body.slug;
    newModel.name = body.name;
    newModel.description = body?.description;

    return this.repository.save(newModel);
  }

  async findAll() {
    return await this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
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
