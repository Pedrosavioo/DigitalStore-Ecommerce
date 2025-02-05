import React from "react";
import "./CardCollection.css";

interface ICardCollectionProps {
   background: string;
   off?: number;
   content: string
}

const CardCollection: React.FC<ICardCollectionProps> = ({
   background,
   off,
   content
}) => {
   return (
      <div
         className="card-collection"
         style={{ backgroundImage: `url(${background})` }}
      >
         {off && (
            <div className="div-off">
               <p>{off} % off</p>
            </div>
         )}
         <p className="content-card-collection">{content}</p>
         <button>comprar</button>
      </div>
   );
};

export default CardCollection;
