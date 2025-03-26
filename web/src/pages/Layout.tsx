/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MessageBox from "../components/MessageBox/MessageBox";

const Layout = () => {
   return (
      <>
         <Header />
         <main>
            <Outlet />
            // Add component Toaster (Message)
            <MessageBox />
         </main>
         <Footer />
      </>
   );
};

export default Layout;
