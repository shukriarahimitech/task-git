// Department.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { University } from "./university";
import { Specialization } from "./specializations";

@Entity()
export class Department {

  @Column()
  name: string;

  @ManyToOne(() => University, university => university.departments)
  university: University;

  @OneToMany(() => Specialization, specialization => specialization.department)
  specializations: Specialization[];
}
