import React, { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface UserContextTypeI {
   user: IUser | null;
   setUser: (user: IUser | null) => void;
   getInfoMe: (email: string) => void;
}

const UserContext = createContext<UserContextTypeI | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [user, setUser] = useState<IUser | null>(null);

   async function getInfoMe() {
      try {
         const response = await fetch("http://localhost:3001/v1/user/me", {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
            },
            credentials: "include",
         });
         const data = await response.json();

         console.log("dados obtidos com sucesso", data);
         setUser(data);
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <UserContext.Provider value={{ user, setUser, getInfoMe }}>
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

   return context;
};
