/* eslint-disable @typescript-eslint/class-name-casing */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class categories {
  @PrimaryColumn()
  Category_Id: number;

  @Column()
  Name: string;
}
