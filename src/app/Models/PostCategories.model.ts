import {CategoryModel} from "./Category.model";
import {PostModel} from "./Post.model";

export interface PostCategoriesModel {
  categories: CategoryModel[];
  post: PostModel;
  comments:number;
}
