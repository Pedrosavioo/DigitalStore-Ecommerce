import React from "react";

interface ISearchProps {
   color: string;
}

const Search: React.FC<ISearchProps> = ({ color }) => {
   return (
      <svg
         width="18"
         height="19"
         viewBox="0 0 18 19"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <circle
            cx="8.80549"
            cy="8.80553"
            r="7.49047"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M14.0153 14.4043L16.9519 17.3334"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default Search;
