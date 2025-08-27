// TopMenuBar.jsx
import React from 'react';
import { Box, Group, Button, Text, MantineProvider, Container} from '@mantine/core';

export default function TopMenuBar() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="xl" py="md">
        <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 60,
              padding: '0 16px',
              backgroundColor: 'gray.1',
              zIndex: 1,
              position: 'relative',
            }}
          >
            <Group spacing="md">
              <Button variant="filled" color="blue">Home</Button>
              <Button variant="filled" color="blue">Products</Button>
              <Button variant="filled" color="blue">About</Button>
              <Button variant="filled" color="blue">Contact</Button>
            </Group>
          </Box>
      </Container>
      </MantineProvider>
  );
}
