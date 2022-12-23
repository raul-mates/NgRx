export interface ProductModel {
  id?: number | string;
  image: string;
  modelShot: string;
  title: string;
  description: string;
  color: string;
  category: string;
  price: {
    currentPrice: string;
    oldPrice: string;
  }
}

