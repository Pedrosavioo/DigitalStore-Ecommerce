import React, { createContext, useContext, useState } from "react";
import { IUser } from "../interfaces/IUser";

interface UserContextTypeI {}

const UserContext = createContext<UserContextTypeI | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [user, setUser] = useState<IUser | null>(null);

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};

// Hook customizado para acessar o contexto
export const useUser = () => {
   const context = useContext(UserContext);
   if (!context) {
      throw new Error("useUser deve ser utilizado dentro de um userProvider");
   }
};
