import { ChakraProvider, Box, Text, Input, Center } from "@chakra-ui/react"
import { Btn } from "../Button/Button"
import { login } from "../../services/login"

export const Card = () => {
  return (
    <ChakraProvider>
      <Box maxWidth='500px' backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' display='flex' flexDirection='column' gap='15px'>
      <Text fontSize='22px' fontWeight='medium'>
        Faça o login
      </Text>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <Btn click={() => login('Rodrigo')} />
      </Center>
      </Box>
    </ChakraProvider>
  )
}