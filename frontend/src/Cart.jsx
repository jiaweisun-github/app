import { useState } from "react";
import { Card, Text, Button, Stack } from "@mantine/core";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        top: 80,
        right: 0,
        width: open ? 320 : 48,
        height: "80vh",
        background: "#fff",
        boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
        zIndex: 1000,
        padding: open ? 24 : 8,
        overflowY: "auto",
        borderLeft: "1px solid #eee",
        transition: "width 0.2s, padding 0.2s",
        display: "flex",
        flexDirection: "column",
        alignItems: open ? "stretch" : "center",
      }}
    >
      <div style={{ display: 'flex', justifyContent: open ? 'flex-end' : 'center', alignItems: 'center', marginBottom: open ? 8 : 0 }}>
        <Button
          variant="light"
          size="xs"
          style={{ zIndex: 1001 }}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "⮜" : "⮞"}
        </Button>
      </div>
      {open && (
        <>
          <Text fw={700} size="lg" mb="md">Cart</Text>
          <Stack>
            {cart.length === 0 ? (
              <Text c="dimmed">Your cart is empty.</Text>
            ) : (
              cart.map((item) => (
                <Card key={item.id} shadow="sm" padding="sm" radius="md" withBorder>
                  <Text fw={500}>{item.name}</Text>
                  <Text c="dimmed">${item.price} x {item.quantity}</Text>
                  <Button mt="sm" color="red" size="xs" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </Card>
              ))
            )}
          </Stack>
          {cart.length > 0 && (
            <Button mt="lg" fullWidth color="green" onClick={() => navigate('/checkout', { state: { cart } })}>
              Checkout
            </Button>
          )}
        </>
      )}
    </div>
  );
}
