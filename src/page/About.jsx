import { useEffect, useState } from "react";
import ProductCard from "../Component/ProductCard";
import ProductModal from "../Component/ProductModal";
function About({addtocart}){
  const[products , setProducts]= useState([])
  const [selectproduct, setSelectproduct] = useState(null)

    useEffect(() =>{


        fetch("https://velvourshop.com/products.json")
      .then((res) => res.json())
      .then ((data) => {
        const apidata = data.products.map((product) =>({

            id: product.id,
            title : product.title,
            image : product.images[0].src,
            price  : product.variants[0].price
          }))
          setProducts(apidata)
      })
    },[]);
  function openModal(product){
    setSelectproduct(product);
  }
  function closebtn(){
    setSelectproduct(null)
  }



  return(
    <> 
     <div className="about-page">
      <h1 className="products-heading"   style={{ color: " #6c3cff"}}>Our Products</h1>
    <div  className="products-row">
    {products.map((product) =>(
      <ProductCard
      key={product.id}
      product={product}
      viewDetail={() => openModal(product)}
       />
    ))}
    </div>
    {selectproduct &&(
      <ProductModal
       product={selectproduct}
      closebtn ={closebtn} 
      addTocart ={addtocart} />
     
    )}
     </div>
    </>
  )
}
export default About;