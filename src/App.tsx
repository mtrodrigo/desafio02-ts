import { ChakraProvider, Box } from '@chakra-ui/react'
import { Layout } from './components/Layout/Layout';
import { Card } from './components/Card/Card';

function App() {
  return (
    <ChakraProvider>
      <Box height='100vh' backgroundColor='#9413dc' display='flex' flexDirection='column' alignItems='center' justifyContent='space-between'>
        <Layout>
          <Card />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default App;
