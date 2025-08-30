import React from 'react';
import { useLocation } from "react-router-dom";
import { SimpleGrid, Card, Text, Button } from "@mantine/core";

const CheckoutButton = ({ stripePromise }) => {
  const location = useLocation();
  const cart = location.state?.cart || [];

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
      <SimpleGrid cols={4} spacing="lg" verticalSpacing="lg">
        {cart.length === 0 ? (
          <Text c="dimmed">No items in cart.</Text>
        ) : (
          cart.map(item => (
            <Card key={item.id} shadow="sm" padding="sm" radius="md" withBorder>
              <Text fw={500}>{item.name}</Text>
              <Text c="dimmed">${item.price} x {item.quantity}</Text>
            </Card>
          ))
        )}
      </SimpleGrid>
      <Button mt="xl" color="green" size="lg" onClick={handleClick} disabled={cart.length === 0}>
        Checkout
      </Button>
    </div>
  );
};

export default CheckoutButton;
