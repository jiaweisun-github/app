import React from 'react';
import { useLocation } from "react-router-dom";
import { SimpleGrid, Card, Text, Button } from "@mantine/core";
import CheckoutItems from './CheckoutItems';
import { useCart } from '../cart/CartContext';

const CheckoutPage = ({ stripePromise }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
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

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 32 }}>
      <Text fw={700} size="lg" mb="md">Items to Checkout</Text>
      <CheckoutItems cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      {cart.length > 0 && (
        <Text fw={700} size="md" mt="md" align="left">
          Total: ${totalPrice}
        </Text>
      )}
    <Button onClick={handleClick} mt="md" fullWidth>
      Checkout
    </Button>
    </div>
  );
};

export default CheckoutPage;
