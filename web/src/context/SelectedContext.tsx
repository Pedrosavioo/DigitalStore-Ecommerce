import React, { createContext, useContext, useState } from "react";

// Define o tipo para o contexto
interface SelectedContextType {
   styledSelected: number;
   setStyledSelected: React.Dispatch<React.SetStateAction<number>>;
}

// Cria o contexto com o valor inicial como undefined
const SelectedContext = createContext<SelectedContextType | undefined>(
   undefined
);

// Cria o Provider do contexto
export const SelectedProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [styledSelected, setStyledSelected] = useState(0);

   return (
      <SelectedContext.Provider value={{ styledSelected, setStyledSelected }}>
         {children}
      </SelectedContext.Provider>
   );
};

// Custom hook para acessar o contexto facilmente
export const useSelected = () => {
   const context = useContext(SelectedContext);
   if (!context) {
      throw new Error(
         "useSelected deve ser usado dentro de um SelectedProvider"
      );
   }
   return context;
};
