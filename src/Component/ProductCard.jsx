function ProductCard({product,viewDetail}){
    return(
   <>
        <div className="product-card"  >
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={viewDetail}>View details</button>


        </div>
        </>
    )
}
export default ProductCard; 