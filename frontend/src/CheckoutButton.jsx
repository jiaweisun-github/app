import React from 'react';

const CheckoutButton = ({ stripePromise }) => {
  const handleClick = async () => {
    const response = await fetch('http://localhost:8080/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).catch(err => console.error(err.message));

    if (!response) return;

    const session = await response.json();

    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return <button onClick={handleClick}>Checkout</button>;
};

export default CheckoutButton;
