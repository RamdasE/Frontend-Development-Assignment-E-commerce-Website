import React, { useState } from 'react';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {orderPlaced ? (
        <h3>Your order has been placed successfully!</h3>
      ) : (
        <button onClick={handlePlaceOrder}>Place Order</button>
      )}
    </div>
  );
};

export default Checkout;
