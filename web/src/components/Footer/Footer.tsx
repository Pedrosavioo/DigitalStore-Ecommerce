import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <footer>
         <div id="first-div-footer">
            <div id="div-social">
               <img
                  src="./assets/icons/logo-footer.svg"
                  alt="Logo Digital Store"
               />
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium recusandae reiciendis consectetur placeat atque
                  voluptatibus, voluptate quo, repellendus nulla minima adipisci
                  aut labore dolores voluptatem. Temporibus vitae hic doloribus
                  adipisci.
               </p>
               <div id="div-icons-social">
                  <img src="./assets/icons/facebook.svg" alt="facebook" />
                  <img src="./assets/icons/instagram.svg" alt="instagram" />
                  <img src="./assets/icons/twitter.svg" alt="twitter" />
               </div>
            </div>
            <div id="container-navigation">
               <div id="information">
                  <h4>Informação</h4>
                  <ul>
                     <li>
                        <a href="#">sobre drip store</a>
                     </li>
                     <li>
                        <a href="#">segurança</a>
                     </li>
                     <li>
                        <a href="#">wishlist</a>
                     </li>
                     <li>
                        <a href="#">blog</a>
                     </li>
                     <li>
                        <a href="#">trabalhe conosco</a>
                     </li>
                     <li>
                        <a href="#">meus pedidos</a>
                     </li>
                  </ul>
               </div>
               <div id="category">
                  <h4>Categorias</h4>
                  <ul>
                     <li>
                        <a href="#">camisetas</a>
                     </li>
                     <li>
                        <a href="#">calças</a>
                     </li>
                     <li>
                        <a href="#">bonés</a>
                     </li>
                     <li>
                        <a href="#">headphone</a>
                     </li>
                     <li>
                        <a href="#">tenis</a>
                     </li>
                  </ul>
               </div>
            </div>
            <div id="contact">
               <h4>Contato</h4>
               <ul>
                  <li>
                     av. santos dumont, 1510 - 1 andar - aldeota, fortaleza -
                     ce, 60150-161
                  </li>
                  <li>(85) 3051-3411</li>
               </ul>
            </div>
         </div>
         <hr />
         <div id="div-digital-college">
            <p>&#xA9; 2022 digital college</p>
         </div>
      </footer>
   );
};

export default Footer;
