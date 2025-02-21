import { ChakraProvider, Button } from '@chakra-ui/react';

interface BtnProps {
    click: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Btn = ({ click }: BtnProps) => {
    return (
        <ChakraProvider>
            <Button onClick={click} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                Button
            </Button>
        </ChakraProvider>
    );
};