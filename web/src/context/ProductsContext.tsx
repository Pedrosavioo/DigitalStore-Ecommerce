import React, { createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";

interface ProductsContextType {
   allProducts: IProduct[] | null;
   setAllProducts: (data: IProduct[] | null) => void;
   currentProduct: IProduct | null;
   setCurrentProduct: (data: IProduct | null) => void;
}

// Cria o contexto com o valor inicial como undefined
const ProductsContext = createContext<ProductsContextType | undefined>(
   undefined
);

// Cria o Provider do contexto
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [allProducts, setAllProducts] = useState<IProduct[] | null>([]);
   const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);

   async function getAllProducts() {
      try {
         const result: any = await fetch("http://localhost:3003/products");
         const data = await result.json();
         setAllProducts(data)
      } catch (error) {
         console.error("Erro ao fazer requisão getAllProducts", error);
      }
   }

   useEffect(() => {
      getAllProducts();
   }, []);

   return (
      <ProductsContext.Provider
         value={{
            allProducts,
            currentProduct,
            setAllProducts,
            setCurrentProduct,
         }}
      >
         {children}
      </ProductsContext.Provider>
   );
};

// Custom hook para acessar o contexto facilmente
export const useProducts = () => {
   const context = useContext(ProductsContext);
   if (!context) {
      throw new Error(
         "useProducts deve ser usado dentro de um SelectedProvider"
      );
   }
   return context;
};
