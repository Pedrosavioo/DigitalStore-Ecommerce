import React from "react";
import "./CardCategory.css";

interface ICardCategoryProps {
   image: any;
   content: string;
}

const CardCategory: React.FC<ICardCategoryProps> = ({ image, content }) => {
   return (
      <div className="card-category">
         <div className="ellipse">
            {image}
         </div>
         <p>{content}</p>
      </div>
   );
};

export default CardCategory;
