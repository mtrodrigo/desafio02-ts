import { Box, ChakraProvider, Text } from "@chakra-ui/react"

export const Header  = () => {
  return(
    <ChakraProvider>
      <Box width='100%' borderBottom='1px solid #FFFFFF' paddingY='10px'>
        <Text fontSize='3xl' fontWeight='extrabold' paddingLeft='20px'>
          Dio Bank
        </Text>
      </Box>
    </ChakraProvider>
  )
}
