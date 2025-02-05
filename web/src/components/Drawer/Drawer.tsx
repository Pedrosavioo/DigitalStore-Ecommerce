/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import "./Drawer.css";
import Button from "../Button/Button";
import { useSelected } from "../../context/SelectedContext";
import { useNavigate } from "react-router-dom";

export default function TemporaryDrawer() {
   const [open, setOpen] = React.useState(false);

   const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(!open);
   };

   const { styledSelected, setStyledSelected } = useSelected();

   const navigate = useNavigate();

   function navigateToPage(numberPage: number) {
      setStyledSelected(numberPage);

      if (numberPage === 0) {
         navigate("/");
      }
      if (numberPage === 1) {
         navigate("/products");
      }
   }

   const DrawerList = (
      <Box sx={{ width: 250 }} onClick={toggleDrawer(open)}>
         <List>
            <div id="content-list">
               <div>
                  <h4>Páginas</h4>
                  <nav>
                     <ul>
                        <li>
                           <a
                              onClick={() => navigateToPage(0)}
                              className={styledSelected === 0 ? "select" : ""}
                           >
                              Home
                           </a>
                        </li>
                        <li>
                           <a
                              onClick={() => navigateToPage(1)}
                              className={styledSelected === 1 ? "select" : ""}
                           >
                              Produtos
                           </a>
                        </li>
                        <li>
                           <a
                              onClick={() => setStyledSelected(2)}
                              className={styledSelected === 2 ? "select" : ""}
                           >
                              Categorias
                           </a>
                        </li>
                        <li>
                           <a
                              onClick={() => setStyledSelected(3)}
                              className={styledSelected === 3 ? "select" : ""}
                           >
                              Meus Produtos
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div id="div-buttons">
                  <Divider sx={{ marginBottom: ".5rem" }} />
                  <Button width="100%" content="entrar" type="primary" />
                  <Button width="100%" content="Cadastre-se" type="secondary" />
               </div>
            </div>
         </List>
      </Box>
   );

   return (
      <div>
         <MenuIcon
            onClick={toggleDrawer(open)}
            sx={{ height: "24px", width: "24px", cursor: "pointer" }}
         />
         <Drawer open={open} onClose={toggleDrawer(open)} id="drawer-mui">
            {DrawerList}
         </Drawer>
      </div>
   );
}
