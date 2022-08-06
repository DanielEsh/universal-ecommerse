import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Brand } from '@/api/brands/entities/brand.entity';
import { Category } from '@/api/categories/entities/category.entity';

@Entity()
export class Good extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public name: string;

  @Column({ type: 'varchar' })
  public description: string;

  @ManyToOne(() => Brand, (brand) => brand.id)
  public brand: Brand;

  @ManyToOne(() => Category, (category) => category.id)
  public category: Category;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
