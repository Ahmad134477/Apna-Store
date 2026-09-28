function ProductModal({ product, closebtn, addTocart }) {
  return (
    <>
      {/* =================================
          MODAL OVERLAY
      ================================= */}

      <div className="product-modal-overlay">

        {/* =================================
            MODAL BOX
        ================================= */}

        <div className="product-modal">

          {/* =================================
              CLOSE BUTTON
          ================================= */}

          <button
            className="modal-close"
            onClick={closebtn}
          >
            ✕
          </button>


          {/* =================================
              PRODUCT IMAGE
          ================================= */}

          <div className="modal-image">

            <img
              src={product.image}
              alt={product.title}
            />

          </div>


          {/* =================================
              PRODUCT DETAILS
          ================================= */}

          <div className="modal-details">

            <span>PRODUCT DETAILS</span>

            <h2>
              {product.title}
            </h2>

            <h3>
              ${product.price}
            </h3>

            <p>
              {product.description}
            </p>


            {/* =================================
                ADD TO CART
            ================================= */}

            <button
              className="modal-cart-btn"
              onClick={() => {
                addTocart(product);
                closebtn();
              }}
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default ProductModal;
















