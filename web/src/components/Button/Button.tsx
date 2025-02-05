import React from "react";
import "./Button.css";

interface IButtonProps {
   width?: string;
   content: any;
   type: "primary" | "secondary";
   onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ width, content, type , onClick}) => {
   return (
      <button style={{ width: `${width ? width : 'fit-content'}` }} className={`${type} btn`} onClick={onClick} >
         {content}
      </button>
   );
};

export default Button;
