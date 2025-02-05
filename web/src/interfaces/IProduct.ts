export interface IProduct {
   id: string;
   category: string;
   content: string;
   current_price: number;
   price_off: number;
   percentage_off: number;
   images: string[];
   reference: string;
   rating: string;
   number_of_stars: number;
   number_of_reviews: number;
   product_description: string;
   available_sizes: number[];
   colors: string[];
}
