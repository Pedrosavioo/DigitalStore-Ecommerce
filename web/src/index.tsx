import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SelectedProvider } from "./context/SelectedContext";
import { ProductProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <UserProvider>
         <ProductProvider>
            <SelectedProvider>
               <App />
            </SelectedProvider>
         </ProductProvider>
      </UserProvider>
   </React.StrictMode>
);
