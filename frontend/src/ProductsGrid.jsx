import { Card, Image, Text, Button, SimpleGrid } from '@mantine/core';

const [products, setProducts] = useEffect(() => {
    fetch('/product/all')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error(err));
}, []);

export default function ProductsGrid() {
  return (
    <SimpleGrid cols={4} spacing="lg">
      {products.map((p) => (
        <Card key={p.id} shadow="sm" padding="lg">
          <Card.Section>
            <Image src={p.image} alt={p.name} />
          </Card.Section>
          <Text weight={500}>{p.name}</Text>
          <Text color="dimmed">{p.price}</Text>
          <Button mt="md" fullWidth>Add to Cart</Button>
        </Card>
      ))}
    </SimpleGrid>
  );
}