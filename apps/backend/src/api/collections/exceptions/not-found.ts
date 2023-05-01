import { NotFoundException } from '@nestjs/common';

export class CollectionNotFoundException extends NotFoundException {
  constructor(id: number) {
    super(`Collection with id ${id} not found`);
  }
}
