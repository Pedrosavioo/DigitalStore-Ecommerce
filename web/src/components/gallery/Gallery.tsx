import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

interface IGalleryProps {
   images_path: string[];
}

const Gallery: React.FC<IGalleryProps> = ({ images_path }) => {
   const settings: any = {
      customPaging: function (i: number) {
         // eslint-disable-next-line jsx-a11y/alt-text
         return <img src={images_path[i]} className="image-select" />;
      },
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
      <section id="gallery">
         <Slider {...settings}>
            <img
               src={images_path[0]}
               alt="image1"
               id="slide1"
               className="slide-image-product"
            />
            <img
               src={images_path[1]}
               alt="image1"
               id="slide1"
               className="slide-image-product"
            />
            <img
               src={images_path[2]}
               alt="image1"
               id="slide1"
               className="slide-image-product"
            />
            <img
               src={images_path[3]}
               alt="image1"
               id="slide1"
               className="slide-image-product"
            />
         </Slider>
      </section>
   );
};
export default Gallery;
