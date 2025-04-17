export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export const basket: Product[];
  
  export function addToBasket(product: Product): void;
  