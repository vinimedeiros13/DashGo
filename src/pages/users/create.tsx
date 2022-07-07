import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Title } from "../../components/Title";

export default function Create() {
  return (
    <Box>
      <Header />

      <Flex my='6' w='100%' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg={'gray.800'} p='8'>
          <Title text='Criar usuário' />

          <Divider my='6' borderColor='gray.700' />

          <Stack spacing='8'>
            <SimpleGrid minChildWidth='200px' gap='8' w='100%'>
              <Input name='name' label='Nome completo' type='text' />
              <Input name='email' label='Email' type='email' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='200px' gap='8' w='100%'>
              <Input name='password' label='Senha' type='password' />
              <Input name='password-confirm' label='Confirmar senha' type='password' />
            </SimpleGrid>
          </Stack>

          <HStack spacing='4' mt='8' justify='flex-end'>
            <Button colorScheme='whiteAlpha' > Cancelar </Button>
            <Button colorScheme='pink' > Salvar </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  )
}