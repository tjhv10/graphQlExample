import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ItemStatus } from './item-status.enum';
import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  @Field()
  Id: number;
  @Field()
  @Column()
  Name: string;
  @Field()
  @Column()
  Upload_date: Date;
  @Field()
  @Column()
  Description: string;
  @Field()
  @Column()
  Price: number;
  @Field()
  @Column()
  Seller_name: string;
  @Field()
  @Column()
  Image_url: string;
  @Field()
  @Column()
  Status: ItemStatus;
}
