import React from 'react';
import { SimpleGrid, Card, Text, Button, Group } from "@mantine/core";

export default function CheckoutItems({ cart, removeFromCart, updateQuantity }) {
  return (
    <SimpleGrid cols={4} spacing="lg" verticalSpacing="lg">
      {cart.length === 0 ? (
        <Text c="dimmed">No items in cart.</Text>
      ) : (
        cart.map(item => (
          <Card key={item.id} shadow="sm" padding="sm" radius="md" withBorder>
            <Text fw={500}>{item.name}</Text>
            <Text c="dimmed">${item.price} x {item.quantity}</Text>
            <Group mt="md">
              <Button size="xs" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</Button>
              <Text>{item.quantity}</Text>
              <Button size="xs" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
              <Button color="red" size="xs" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </Group>
          </Card>
        ))
      )}
    </SimpleGrid>
  );
}