// University.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Department } from "./departments"; // Removed file extension

@Entity()
export class University {
  @Column()
  public name: string; // Added access modifier

  @OneToMany(() => Department, department => department.university)
  public departments: Department[]; // Added access modifier
}
