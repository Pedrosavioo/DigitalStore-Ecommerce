/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "sonner";

const Layout = () => {
   return (
      <>
         <Header />
         <main>
            <Outlet />
            
            // Add component Toaster (Message)
            <Toaster /> 
         </main>
         <Footer />
      </>
   );
};

export default Layout;
