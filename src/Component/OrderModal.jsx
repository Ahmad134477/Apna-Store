import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function OrderModal({ cart, grandTotal, closeModal }) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);



  const getCustomerLocation = () => {
    if (!navigator.geolocation) {
      alert("Your browser does not support location.");
      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

        setCustomerLocation(mapsLink);
        setLocationLoading(false);
      },
      () => {
        setLocationLoading(false);
        alert("Please allow location permission.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };



  const handleWhatsAppCheckout = () => {
    if (!customerName.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!customerPhone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!customerAddress.trim()) {
      alert("Please enter your delivery address.");
      return;
    }


    const whatsappNumber = "923363210455";

   

    const orderDetails = cart
      .map((item, index) => {
        const itemTotal =
          Number(item.price) * item.quantity;

        return `
${index + 1}. ${item.title}
Price: $. ${item.price}
Quantity: ${item.quantity}
Total: $. ${itemTotal}
Image: ${item.image}
`;
      })
      .join("\n");



    const message = `
🛒 E APNA STORE - NEW ORDER

👤 Customer Name:
${customerName}

📱 Customer Phone:
${customerPhone}

🏠 Delivery Address:
${customerAddress}

📍 Customer Location:
${customerLocation || "Location not provided"}

--------------------------------

📦 ORDER PRODUCTS

${orderDetails}

--------------------------------

💰 GRAND TOTAL:

Rs. ${grandTotal}

--------------------------------

Please confirm my order.

Thank you for shopping with E Apna Store ❤️
`;

    const encodedMessage =
      encodeURIComponent(message);

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // WhatsApp Open
    window.open(whatsappURL,);

    // Modal Close
    closeModal();
  };

  return (
    <div className="checkout-overlay">

      <div className="checkout-modal">

        {/* Close Button */}

        <button
          className="checkout-close"
          onClick={closeModal}
        >
          ×
        </button>

        <h2>
          Checkout
        </h2>

        <p>
          Enter your delivery details
        </p>


        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) =>
            setCustomerName(e.target.value)
          }
        />

    

        <input
          type="tel"
          placeholder="Phone Number"
          value={customerPhone}
          onChange={(e) =>
            setCustomerPhone(e.target.value)
          }
        />

  

        <textarea
          placeholder="Complete Delivery Address"
          value={customerAddress}
          onChange={(e) =>
            setCustomerAddress(e.target.value)
          }
        />

       

        <button
          className="location-btn"
          onClick={getCustomerLocation}
          disabled={locationLoading}
        >
          {locationLoading
            ? "📍 Getting Location..."
            : "📍 Add My Location"}
        </button>

       

        {customerLocation && (
          <p className="location-success">
            ✅ Location Added Successfully
          </p>
        )}

    

        <button
          className="whatsapp-checkout-btn"
          onClick={handleWhatsAppCheckout}
        >
          <FaWhatsapp /> Confirm Order on WhatsApp
        </button>

      </div>

    </div>
  );
}

export default OrderModal;