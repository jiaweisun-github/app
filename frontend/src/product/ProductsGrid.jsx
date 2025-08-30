import { useEffect, useState } from "react";
import { SimpleGrid, Card, Text, Button, Group } from "@mantine/core";
import { useCart } from "../cart/CartContext";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const { addToCart, cart, updateQuantity } = useCart();
  const [quantities, setQuantities] = useState({});


  useEffect(() => {
    fetch("http://localhost:8080/product/all")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setQuantities((prev) => {
        const updated = { ...prev };
        products.forEach((p) => {
          if (updated[p.id] === undefined) updated[p.id] = 1;
        });
        return updated;
      });
    }
  }, [products]);

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 32 }}>
      <SimpleGrid cols={4} spacing="lg" verticalSpacing="lg">
        {products.map((p) => {
          const cartItem = cart.find(item => item.id === p.id);
          const quantity = cartItem ? cartItem.quantity : quantities[p.id] || 1;
          return (
            <Card key={p.id} shadow="sm" padding="lg" radius="md" withBorder>
              <Text fw={500}>{p.name}</Text>
              <Text c="dimmed">${p.price}</Text>
              <Group mt="md">
                <Button size="xs" onClick={() => handleQuantityChange(p.id, -1)} disabled={quantity <= 1}>-</Button>
                <Text>{quantity}</Text>
                <Button size="xs" onClick={() => handleQuantityChange(p.id, 1)}>+</Button>
                <Button onClick={() => addToCart({ ...p, quantity })}>Add to Cart</Button>
              </Group>
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
}
