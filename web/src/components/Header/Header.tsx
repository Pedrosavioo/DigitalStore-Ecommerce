/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Header.css";
import TemporaryDrawer from "../Drawer/Drawer";
import { Badge, useMediaQuery } from "@mui/material";
import ShoppingCart from "../../icons/ShoppingCart";
import Search from "../../icons/Search";
import Button from "../Button/Button";
import { useSelected } from "../../context/SelectedContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
   const [openSearch, setOpenSearch] = useState(false);
   const isMobile = useMediaQuery("(max-width: 850px)");

   const navigate = useNavigate();

   const { styledSelected, setStyledSelected } = useSelected();

   function navigatePage(numberPage: number) {
      if (numberPage === 0) {
         navigate("/");
         setStyledSelected(numberPage);
      }
      if (numberPage === 1) {
         navigate("/products");
         setStyledSelected(numberPage);
      }
   }

   const handleSearchClick = () => {
      setOpenSearch((prev) => !prev);
   };

   return (
      <>
         {isMobile ? (
            <header
               id="header-mobile"
               style={{ height: openSearch ? "150px" : "8vh" }}
            >
               <TemporaryDrawer />
               <img
                  src="/assets/icons/logo-header.svg"
                  alt="Logo Digital Store"
                  id="img-logo-header"
               />
               <div id="div-cart">
                  <div onClick={handleSearchClick}>
                     <Search color="var(--primary)" />
                  </div>
                  <Badge badgeContent={4} color="error">
                     <ShoppingCart color="var(--primary)" />
                  </Badge>
               </div>
               {openSearch && (
                  <div id="input-search-mobile">
                     <input type="text" placeholder="Pesquisar" />
                     <Search color="var(--dark-gray-2)" />
                  </div>
               )}
            </header>
         ) : (
            <header id="header-desktop">
               <div id="center-header-desktop">
                  <div id="div-first-desktop">
                     <img
                        src="/assets/icons/logo-header.svg"
                        alt="Logo Digital Store"
                        id="img-logo-header"
                     />
                     <div id="input-search-mobile">
                        <input type="text" placeholder="Pesquisar" />
                        <Search color="var(--dark-gray-2)" />
                     </div>
                     <div id="div-buttons-desktop">
                        <div>
                           <Button
                              width="100px"
                              content="entrar"
                              type="primary"
                           />
                           <Button content="Cadastre-se" type="secondary" />
                        </div>
                        <Badge badgeContent={4} color="error">
                           <ShoppingCart color="var(--primary)" />
                        </Badge>
                     </div>
                  </div>
                  <nav>
                     <ul>
                        <li>
                           <a
                              onClick={() => navigatePage(0)}
                              className={styledSelected === 0 ? "select" : ""}
                           >
                              Home
                           </a>
                        </li>
                        <li>
                           <a
                              onClick={() => navigatePage(1)}
                              className={styledSelected === 1 ? "select" : ""}
                           >
                              Produtos
                           </a>
                        </li>
                        <li>
                           <a
                              onClick={() => navigatePage(2)}
                              className={styledSelected === 2 ? "select" : ""}
                           >
                              Categorias
                           </a>
                        </li>
                        <li>
                           <a
                              onClick={() => navigatePage(3)}
                              className={styledSelected === 3 ? "select" : ""}
                           >
                              Meus Produtos
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </header>
         )}
      </>
   );
};

export default Header;
