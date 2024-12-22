import { Resolver, Query, Args } from '@nestjs/graphql';
import { CategoryType } from './category.type';
import { CategoryService } from './categories.service';

@Resolver(() => CategoryType)
export class CategoriesResolver {
  constructor(private lessonService: CategoryService) {}

  @Query(() => CategoryType)
  getCategoryById(@Args('id') id: number) {
    return this.lessonService.getCategoryById(id);
  }

  @Query(() => [CategoryType])
  getCategories() {
    return this.lessonService.getCategories();
  }
}
