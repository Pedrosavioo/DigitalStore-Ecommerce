import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button/Button";
import "./Carousel.css";

const Carousel = () => {
   const settings: any = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
   };

   return (
      <section id="carousel">
         <img
            src="./assets/icons/Ornament.svg"
            alt="Ornament design"
            id="ornament-design"
         />
         <Slider {...settings}>
            <div id="slide1">
               <div id="image1" className="image-slide"></div>
               <div className="content-slide">
                  <p className="p-offers">Melhores ofertas personalizadas</p>
                  <h2>queima de estoque nike 🔥</h2>
                  <p className="p">
                     Consequat culpa exercitation mollit nisi excepteur do do
                     tempor laboris eiusmod irure consectetur.
                  </p>
                  <Button content="ver ofertas" type="primary" width="100%" />
               </div>
            </div>
            <div id="slide2">
               <div id="image2" className="image-slide"></div>
               <div className="content-slide">
                  <p className="p-offers">Melhores ofertas personalizadas</p>
                  <h2>queima de estoque nike 🔥</h2>
                  <p className="p">
                     Consequat culpa exercitation mollit nisi excepteur do do
                     tempor laboris eiusmod irure consectetur.
                  </p>
                  <Button content="ver ofertas" type="primary" width="100%" />
               </div>
            </div>
            <div id="slide3">
               <div id="image3" className="image-slide"></div>
               <div className="content-slide">
                  <p className="p-offers">Melhores ofertas personalizadas</p>
                  <h2>queima de estoque nike 🔥</h2>
                  <p className="p">
                     Consequat culpa exercitation mollit nisi excepteur do do
                     tempor laboris eiusmod irure consectetur.
                  </p>
                  <Button content="ver ofertas" type="primary" />
               </div>
            </div>
         </Slider>
      </section>
   );
};
export default Carousel;
