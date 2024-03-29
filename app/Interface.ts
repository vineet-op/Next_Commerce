export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: string;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  price: string;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}
