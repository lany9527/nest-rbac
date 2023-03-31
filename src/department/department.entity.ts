import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('department')
export class DepartmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ nullable: true })
  parentId: string;

  @ManyToOne(() => DepartmentEntity, department => department.children, { onDelete: 'CASCADE' })
  parent: DepartmentEntity;

  @OneToMany(() => DepartmentEntity, department => department.parent)
  children: DepartmentEntity[];
}
