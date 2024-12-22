/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/class-name-casing */
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Item_Category')
export class Item_CategoryType {
  @Field(() => ID)
  Category_Id: number;
  @Field(() => ID)
  Item_Id: number;
}
