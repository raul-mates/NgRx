export interface ProductModel {
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

