/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import "./DrawerFilter.css";
import Button from "../Button/Button";
import { useSelected } from "../../context/SelectedContext";
import Filter from "../../icons/Filter";
import { Close, CloseFullscreen, ExitToApp } from "@mui/icons-material";

export default function TemporaryDrawerFilter() {
   const [open, setOpen] = React.useState(false);

   const toggleDrawer = (newOpen: boolean) => () => {
      setOpen((prevOpen) => !prevOpen);
   };

   const DrawerFilter = (
      <Box sx={{ width: 250 }} onClick={toggleDrawer(open)}>
         <List>
            <form>
               <div>
                  <h3>Filtrar por</h3>
                  <Close color="action" />
               </div>

               <fieldset>
                  <legend>Marca</legend>
                  <label>
                     <input type="checkbox" name="marca[]" value="adiddas" />{" "}
                     Adidas
                  </label>
                  <label>
                     <input type="checkbox" name="marca[]" value="calenciaga" />{" "}
                     Balenciaga
                  </label>
                  <label>
                     <input type="checkbox" name="marca[]" value="k-swiss" />{" "}
                     K-Swiss
                  </label>
                  <label>
                     <input type="checkbox" name="marca[]" value="nike" /> Nike
                  </label>
                  <label>
                     <input type="checkbox" name="marca[]" value="puma" /> Puma
                  </label>
               </fieldset>

               <fieldset>
                  <legend>Categoria</legend>
                  <label>
                     <input
                        type="checkbox"
                        name="categoria[]"
                        value="esporte-e-lazer"
                     />{" "}
                     Esporte e Lazer
                  </label>
                  <label>
                     <input type="checkbox" name="categoria[]" value="casual" />{" "}
                     Casual
                  </label>
                  <label>
                     <input
                        type="checkbox"
                        name="categoria[]"
                        value="utilitario"
                     />{" "}
                     Utilitário
                  </label>
                  <label>
                     <input
                        type="checkbox"
                        name="categoria[]"
                        value="corrida"
                     />{" "}
                     Corrida
                  </label>
               </fieldset>

               <fieldset>
                  <legend>Gênero</legend>
                  <label>
                     <input type="checkbox" name="genero[]" value="masculino" />{" "}
                     Masculino
                  </label>
                  <label>
                     <input type="checkbox" name="genero[]" value="feminino" />{" "}
                     Feminino
                  </label>
                  <label>
                     <input type="checkbox" name="genero[]" value="unisex" />{" "}
                     Unisex
                  </label>
               </fieldset>

               <fieldset>
                  <legend>Estado</legend>
                  <label>
                     <input type="radio" name="estado" value="novo" /> Novo
                  </label>
                  <label>
                     <input type="radio" name="estado" value="usado" /> Usado
                  </label>
               </fieldset>
            </form>
         </List>
      </Box>
   );

   return (
      <div>
         <Button
            content={<Filter />}
            type="primary"
            onClick={toggleDrawer(open)}
         />
         <Drawer open={open} onClose={toggleDrawer(open)} id="drawer-mui">
            {DrawerFilter}
         </Drawer>
      </div>
   );
}
