import { useEffect, useState } from "react";
import { SimpleGrid, Card, Text, Button } from "@mantine/core";
import { useCart } from "./CartContext";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:8080/product/all")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 32 }}>
      <SimpleGrid cols={4} spacing="lg" verticalSpacing="lg">
        {products.map((p) => (
          <Card key={p.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Text fw={500}>{p.name}</Text>
            <Text c="dimmed">${p.price}</Text>
            <Button mt="md" fullWidth onClick={() => addToCart(p)}>
              Add to Cart
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}
