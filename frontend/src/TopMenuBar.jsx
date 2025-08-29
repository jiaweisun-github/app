// TopMenuBar.jsx
import { useNavigate } from 'react-router-dom';
import { Box, Group, Button, Text, MantineProvider, Container} from '@mantine/core';

const TopMenuBar = () => {
  const navigate = useNavigate();

  return (
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
              <Button variant="filled" color="blue" onClick={() => navigate('/')}>Home</Button>
              <Button variant="filled" color="blue" onClick={() => navigate('/products')}>Products</Button>
            </Group>
          </Box>
      </Container>
  );
}

export default TopMenuBar;
