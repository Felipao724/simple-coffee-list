export interface CoffeeModel {
  available: boolean;
  id: number;
  image: string;
  name: string;
  popular: boolean;
  price: string;
  rating: number | null | string;
  votes: number;
}
