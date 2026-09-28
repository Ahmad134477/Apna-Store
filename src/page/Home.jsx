import { Headphones, products, Mobiles } from "../data/products";

import ProductCard from "../Component/ProductCard";
import ProductModal from "../Component/ProductModal";

import "./Home.css"

import { useState, useEffect } from "react";


function Home({ addtocart }) {

  // Slider Images + Heading + Description
  const images = [
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/028/246/253/small/neon-blue-head-phones-in-3d-purple-rays-background-ai-generative-photo.jpg",
      heading: "Premium Headphones",
      description:
        "Experience high quality sound with our premium headphones."
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUEhoBPug1aqvEunSXn4fQPg5KOCXqXnCQnMZpHRGO_IlVHkrrFTho0Q&s=10",
      heading: "Beauty Collection",
      description:
        "Discover amazing beauty products at affordable prices."
    },

    {
      image:
        "https://img.magnific.com/free-photo/black-friday-sales-sign-neon-light_23-2151833073.jpg?semt=ais_hybrid&w=740&q=80",
      heading: "Smart Shopping",
      description:
        "Find the latest products and enjoy the best shopping experience."
    }
  ];

  const [current, setCurrent] = useState(0);

 
  function nextSlide() {
    setCurrent((prev) => {
      if (prev === images.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  }

  function previousSlide() {
    setCurrent((prev) => {
      if (prev === 0) {
        return images.length - 1;
      }

      return prev - 1;
    });
  }

 
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

 
  const [selectProduct, setSelectPorduct] = useState(null);

  return (
    <>
      <div className="home">
    
        <div className="slider">

          <div
            className="slider-track"
            style={{
              transform: `translateX(-${current * 100}%)`
            }}
          >

            {images.map((item, index) => (
              <div className="slide" key={index}>

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.heading}
                  style={{
                    width: "1100px",
                    height: "400px",
                    objectFit: "cover"
                  }}
                />

               
                <div className="slide-text">

                  <h1>
                    {item.heading}
                  </h1>

                  <p>
                    {item.description}
                  </p>

                  <button>
                    Shop Now
                  </button>

                </div>

              </div>
            ))}

          </div>

          
          <button
            className="slider-btn previous"
            onClick={previousSlide}
          >
            ❮
          </button>

        
          <button
            className="slider-btn next"
            onClick={nextSlide}
          >
            ❯
          </button>

          {/* Dots */}
          <div className="dots">

            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${
                  current === index ? "active" : ""
                }`}
                onClick={() => setCurrent(index)}
              >
              </button>
            ))}

          </div>

        </div>
      </div>








      <div className="main-heading">

        <h1>My Store</h1>

        <h2>Feature Product</h2>

      </div>


      <div className="product-container">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            viewDetail={() =>
              setSelectPorduct(product)
            }
          />
        ))}

      </div>


      {/* Headphones */}
      <div className="product-container">

        {Headphones.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            viewDetail={() =>
            setSelectPorduct(product)
            }
          />
        ))}

      </div>


  
      <div className="product-container">

        {Mobiles.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            viewDetail={() =>
              setSelectPorduct(product)
            }
          />
        ))}

      </div>


      {selectProduct && (
        <ProductModal
          product={selectProduct}

          closebtn={() =>
            setSelectPorduct(null)
          }

          closeModal={() =>
            setSelectPorduct(null)
          }

          addTocart={(product) => {

            addtocart(product);

            setSelectPorduct(null);

          }}
        />
      )}

    </>
  );
}

export default Home;