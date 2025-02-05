import React, { useEffect, useState } from "react";
import "./ProductView.css";
import Gallery from "../../components/gallery/Gallery";
import { useProducts } from "../../context/ProductsContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Rating, useMediaQuery } from "@mui/material";
import { Star } from "@mui/icons-material";
import CardProduct from "../../components/CardProduct/CardProduct";
import LineRight from "../../icons/LineRight";

const ProductView = () => {
   const routeProduct = ["home", "produtos", "tênis", "nike"];

   const { allProducts, currentProduct, setCurrentProduct } = useProducts();

   const [selectSizeProduct, setSelectSizeProduct] = useState<number | null>(0);

   const [selectColorProduct, setSelectColorProduct] = useState<number | null>(
      0
   );

   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname, currentProduct]);

   const isDesktop = useMediaQuery("(min-width: 850px)");

   const navigate = useNavigate();

   if (!currentProduct) {
      navigate("/");
      return <></>;
   }

   function handleSelectSize(index: number) {
      setSelectSizeProduct(index === selectSizeProduct ? null : index);
   }

   function handleSelectColor(index: number) {
      setSelectColorProduct(index === selectColorProduct ? null : index);
   }

   function navigateToProductPage(product?: any) {
      if (product) {
         setCurrentProduct(product);
         navigate(`/product?info=${product.content}`);
      }

      if (!product) {
         navigate("/product");
      }
   }

   return (
      <section id="product-view">
         <p id="p-route">
            <>
               {routeProduct.map((route, index) => (
                  <span
                     key={index}
                     className="route-product"
                     id={"route" + index}
                  >
                     {route} /{" "}
                  </span>
               ))}
               <span className="route-product">{currentProduct.content}</span>
            </>
         </p>
         <section id="container-info-product">
            <Gallery images_path={currentProduct?.images} />
            <div id="info-product">
               <h2>{currentProduct.content}</h2>
               <p id="p-reference">
                  casual | Nike | REF:{currentProduct.reference}
               </p>
               <div id="div-rating">
                  <Rating
                     name="read-only"
                     value={Number(currentProduct.rating)}
                     readOnly
                     className="rating"
                  />
                  <div>
                     <p id="p-rating">
                        {currentProduct.rating}{" "}
                        <Star style={{ color: "#fff", fontSize: "17px" }} />
                     </p>
                  </div>
                  <p>({currentProduct.number_of_reviews} avaliações)</p>
               </div>
               <div id="div-product-price">
                  <p id="current-price-product">
                     <span>R$</span>
                     {currentProduct.current_price}
                  </p>
                  <p id="price-off">{currentProduct.price_off}</p>
               </div>
               <div id="description-product">
                  <h5>Descrição do produto</h5>
                  <p>{currentProduct.product_description}</p>
               </div>
               <div id="div-size-product">
                  <h5>tamanho</h5>
                  <div>
                     {currentProduct.available_sizes.map((size, index) => (
                        <p
                           key={index}
                           onClick={() => handleSelectSize(index)}
                           className={
                              selectSizeProduct === index ? "size-selected" : ""
                           }
                        >
                           {size}
                        </p>
                     ))}
                  </div>
               </div>
               <div id="div-colors-product">
                  <h5>cor</h5>
                  <div>
                     {currentProduct.colors.map((color, index) => (
                        <div
                           className={
                              selectColorProduct === index
                                 ? "color-selected"
                                 : ""
                           }
                        >
                           <p
                              key={index}
                              style={{ backgroundColor: color }}
                              onClick={() => handleSelectColor(index)}
                           ></p>
                        </div>
                     ))}
                  </div>
               </div>
               <button>comprar</button>
            </div>
         </section>
         {/* Produtos em alta */}
         <section id="products-section">
            <div id="div-title">
               <h4>produtos relacionados</h4>
               <button
                  onClick={() => {
                     navigate("/products");
                  }}
               >
                  Ver todos <LineRight />{" "}
               </button>
            </div>
            <div id="cards-products">
               {allProducts &&
                  allProducts.map((product, index) => (
                     <>
                        {isDesktop
                           ? index < 4 && (
                                <CardProduct
                                   key={index}
                                   category={product.category}
                                   content={product.content}
                                   current_price={product.current_price}
                                   image={product.images[0]}
                                   price_off={product.price_off}
                                   percentage_off={product.percentage_off}
                                   onClick={() =>
                                      navigateToProductPage(product)
                                   }
                                />
                             )
                           : index < 2 && (
                                <CardProduct
                                   key={index}
                                   category={product.category}
                                   content={product.content}
                                   current_price={product.current_price}
                                   image={product.images[0]}
                                   price_off={product.price_off}
                                   percentage_off={product.percentage_off}
                                   onClick={() =>
                                      navigateToProductPage(product)
                                   }
                                />
                             )}
                     </>
                  ))}
            </div>
         </section>
      </section>
   );
};

export default ProductView;
