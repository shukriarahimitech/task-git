// Specialization.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Department } from "./departments";

@Entity()
export class Specialization {
  @Column()
  name: string;

  @ManyToOne(() => Department, department => department.specializations)
  department: Department;
}
