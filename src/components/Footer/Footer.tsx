import { Box, ChakraProvider, Text } from "@chakra-ui/react"

export const Footer  = () => {
  return(
    <ChakraProvider>
      <Box paddingBottom='15px'>
        <Text color='#FFFFFF'>
          © Dio Bankking 2025 - Todos direitos Reservador
        </Text>
      </Box>
    </ChakraProvider>
  )
}
