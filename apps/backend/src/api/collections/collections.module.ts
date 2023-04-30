import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionsController } from '@/api/collections/collections.controller';
import { CollectionService } from '@/api/collections/collections.service';
import { Collection } from '@/api/collections/collections.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collection])],
  controllers: [CollectionsController],
  providers: [CollectionService],
})
export class CollectionsModule {}
