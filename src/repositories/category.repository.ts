import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShoppingsiteapiDataSource} from '../datasources';
import {Category, CategoryRelations} from '../models';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id,
  CategoryRelations
> {
  constructor(
    @inject('datasources.shoppingsiteapi') dataSource: ShoppingsiteapiDataSource,
  ) {
    super(Category, dataSource);
  }
}
