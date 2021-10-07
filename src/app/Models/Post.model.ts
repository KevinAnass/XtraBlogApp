import {PostCategoryModel} from "./PostCategory.model";

export interface PostModel {
  id: number;
  content: string;
  time: Date;
  link: string;
  picture: string;
  title: string;
  idUser?: any;
  idUserNavigation?: any;
  postCategories: PostCategoryModel[];
  postComments: any[];
}
