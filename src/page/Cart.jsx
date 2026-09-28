import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import OrderModal from "../Component/OrderModal";
import "./Cart.css";

function Cart({ cart, setCart }) {

  const [showCheckout, setShowCheckout] = useState(false);

  // ==============================
  // Increase Quantity
  // ==============================

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ==============================
  // Decrease Quantity
  // ==============================

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ==============================
  // Delete Product
  // ==============================

  const deleteProduct = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  // ==============================
  // Grand Total
  // ==============================

  const grandTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price) *
        item.quantity,
    0
  );

  return (
    <div className="cart-page">

      {/* ==============================
          CART HEADING
      ============================== */}

      <div className="cart-heading">

        <span>
          SHOPPING CART
        </span>

        <h1>
          Your Cart
        </h1>

        <p>
          Review your products and complete
          your order
        </p>

      </div>


      {/* ==============================
          CART WRAPPER
      ============================== */}

      <div className="cart-wrapper">

        {/* ==============================
            CART PRODUCTS
        ============================== */}

        <div className="cart-list">

          {cart.length === 0 ? (

            <div className="empty-cart">

              <div className="empty-icon">
                🛒
              </div>

              <h2>
                Your Cart is Empty
              </h2>

              <p>
                Add some products to your
                cart and they will appear here.
              </p>

            </div>

          ) : (

            cart.map((item) => (

              <div
                className="cart-card"
                key={item.id}
              >

                {/* Product Image */}

                <img
                  className="cart-image"
                  src={item.image}
                  alt={item.title}
                />

                {/* Product Information */}

                <div className="cart-info">

                  <span>
                    PRODUCT
                  </span>

                  <h2>
                    {item.title}
                  </h2>

                  <p>
                    Rs. {item.price}
                  </p>

                </div>

                {/* Quantity Controls */}

                <div className="cart-controls">

                  {/* Minus */}

                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.id
                      )
                    }
                  >
                    −
                  </button>

                  {/* Quantity */}

                  <strong>
                    {item.quantity}
                  </strong>

                  {/* Plus */}

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item.id
                      )
                    }
                  >
                    +
                  </button>

                  {/* Delete */}

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteProduct(
                        item.id
                      )
                    }
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            ))

          )}

        </div>


        {/* ==============================
            ORDER SUMMARY
        ============================== */}

        <div className="cart-summary">

          <h2>
            Order Summary
          </h2>

          <div className="summary-line">

            <span>
              Total Products
            </span>

            <strong>
              {cart.length}
            </strong>

          </div>

          <div className="summary-line">

            <span>
              Grand Total
            </span>

            <strong>
              Rs. {grandTotal}
            </strong>

          </div>

          <button
            className="checkout-btn"
            onClick={() =>
              setShowCheckout(true)
            }
            disabled={
              cart.length === 0
            }
          >
            Checkout
          </button>

        </div>

      </div>


      {/* ==============================
          ORDER MODAL
      ============================== */}

      {showCheckout && (
        <OrderModal
          cart={cart}
          grandTotal={grandTotal}
          closeModal={() =>
            setShowCheckout(false)
          }
        />
      )}

    </div>
  );
}

export default Cart;