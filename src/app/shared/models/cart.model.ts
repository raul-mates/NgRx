import {ProductModel} from "./product.model";

export interface CartModel {
  numberOfItems: string;
  items: ProductModel[];
}
