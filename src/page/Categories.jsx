
import ProductCard from "../Component/ProductCard";
import ProductModal from "../Component/ProductModal";
import { useState } from "react";

import {
  products,
  Mobiles,
  Headphones,
} from "../data/products";

function Categories({ addTocart }) {

 
  const [selectcatgories, setSelectcategories] =
    useState("All Product");

  const [selectProduct, setSelectProduct] =
    useState(null);


  const categories = [
    "All Product",
    "Electronics",
    "Shoes",
    "Clothing",
    "Accessories",
  ];

  return (
    <>
      <div className="categories-page">

        <h1>Categories</h1>

     
        <div className="category-buttons">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectcategories(category)
              }
            >
              {category}
            </button>
          ))}

        </div>


       

        <div className="categories-products">

          {products
            .filter(
              (product) =>
                selectcatgories === "All Product" ||
                product.category === selectcatgories
            )
            .map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                viewDetail={() =>
                  setSelectProduct(product)
                }
              />

            ))}

        </div>


       

        <div className="categories-products">

          {Mobiles
            .filter(
              (Mobile) =>
                selectcatgories === "All Product" ||
                Mobile.category === selectcatgories
            )
            .map((Mobile) => (

              <ProductCard
                key={Mobile.id}
                product={Mobile}
                viewDetail={() =>
                  setSelectProduct(Mobile)
                }
              />

            ))}

        </div>


      

        <div className="categories-products">

          {Headphones
            .filter(
              (product) =>
                selectcatgories === "All Product" ||
                product.category === selectcatgories
            )
            .map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                viewDetail={() =>
                  setSelectProduct(product)
                }
              />

            ))}

        </div>


      

        {selectProduct && (

          <ProductModal
            product={selectProduct}

            closebtn={() =>
              setSelectProduct(null)
            }

            closeModal={() =>
              setSelectProduct(null)
            }

            addTocart={(product) => {

              addTocart(product);

              setSelectProduct(null);

            }}
          />

        )}

      </div>
    </>
  );
}

export default Categories;

