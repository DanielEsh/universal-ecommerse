import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Collection extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', unique: true })
  public slug: string;

  @Column({ type: 'varchar' })
  public name: string;

  @Column({ type: 'varchar' })
  public description: string;

  @Column({ type: 'int' })
  public goodsCount: number;

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
