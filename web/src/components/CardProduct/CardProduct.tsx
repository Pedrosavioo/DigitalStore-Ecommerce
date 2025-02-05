import React from "react";
import "./CardProduct.css";

interface ICardProductProps {
   image: string;
   percentage_off?: number;
   content: string;
   price_off: number;
   current_price: number;
   category: string;
   onClick: () => void;
}

const CardProduct: React.FC<ICardProductProps> = ({
   category,
   content,
   current_price,
   image,
   price_off,
   percentage_off,
   onClick,
}) => {
   return (
      <div className="card-product" onClick={onClick}>
         {percentage_off ? (
            <div
               className="image-card-product"
               style={{ backgroundImage: `url(${image})` }}
            >
               <p>{percentage_off} % off</p>
            </div>
         ) : (
            <div
               className="image-card-product"
               style={{ backgroundImage: `url(${image})` }}
            ></div>
         )}
         <div className="content-card">
            <p className="category-card">{category}</p>
            <p className="title-card">{content}</p>
            <p className="price-card">
               <span>${price_off}</span>${current_price}
            </p>
         </div>
      </div>
   );
};

export default CardProduct;
