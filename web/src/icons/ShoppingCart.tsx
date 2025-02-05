import React from "react";

interface IshopCart {
   color: string;
}

const ShoppingCart: React.FC<IshopCart> = ({ color }) => {
   return (
      <svg
         width="20"
         height="21"
         viewBox="0 0 20 21"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4223 17.8203C5.8443 17.8203 6.1873 18.1633 6.1873 18.5853C6.1873 19.0073 5.8443 19.3493 5.4223 19.3493C5.0003 19.3493 4.6583 19.0073 4.6583 18.5853C4.6583 18.1633 5.0003 17.8203 5.4223 17.8203Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6747 17.8203C17.0967 17.8203 17.4397 18.1633 17.4397 18.5853C17.4397 19.0073 17.0967 19.3493 16.6747 19.3493C16.2527 19.3493 15.9097 19.0073 15.9097 18.5853C15.9097 18.1633 16.2527 17.8203 16.6747 17.8203Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M0.749901 1.25L2.8299 1.61L3.7929 13.083C3.8709 14.018 4.6519 14.736 5.5899 14.736H16.5019C17.3979 14.736 18.1579 14.078 18.2869 13.19L19.2359 6.632C19.3529 5.823 18.7259 5.099 17.9089 5.099H3.1639"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M12.1254 8.79504H14.8984"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default ShoppingCart;
