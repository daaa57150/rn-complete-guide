export interface Product {
  id: string;
  ownerId: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
};

export class Product {
  constructor(
    public id: string,
    public ownerId: string,
    public title: string,
    public imageUrl: string,
    public description: string,
    public price: number,
  ) { }
}


