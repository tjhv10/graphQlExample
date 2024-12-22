/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/camelcase */
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Item_CategoryType } from '../Item_Category/item.type';
import { Items_Categories } from './Item_Category.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Items_CategoriesService } from './Item_Category.service';

@Resolver(() => Item_CategoryType)
export class Item_CategoriesResolver {
  constructor(private Items_CategoriesService: Items_CategoriesService) {}

  @Query(() => [Item_CategoryType])
  getItems_Categories(): Promise<Items_Categories[]> {
    return this.Items_CategoriesService.getItems_Categories();
  }

  @Query(() => [Item_CategoryType])
  getItems_CategoriesById(@Args('id') id: number): Promise<Items_Categories[]> {
    return this.Items_CategoriesService.getItems_CategoriesByItemId(id);
  }
  @Mutation('/:id')
  deleteItems_CategoriesByItemId(@Args('id') id: number) {
    return this.Items_CategoriesService.deleteItems_CategoriesByItemId(id);
  }
}
