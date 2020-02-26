import React, { useContext } from 'react'
import {
  Stack,
  Heading,
  Box,
  Input,
  Button,
  Text,
  SimpleGrid
} from '@chakra-ui/core'
import { MyContext } from '../../context'
function Home({ history }) {
  const context = useContext(MyContext)
  const { feed } = context.state
  return (
    <Stack
      mt="10vh"
      minH="90vh"
      backgroundColor="#ffdbe3"
      textAlign="center"
      w="100vw"
      p={8}
      spacing={8}
    >
      <Heading as="h1" size="2xl" color="#1e1e1e">
        INTEGRAL
        <Box as="span" color="#ff3465">
          OFFICE
        </Box>
      </Heading>
      <Input
        borderBottomColor="#1e1e1e"
        variant="flushed"
        focusBorderColor="#ff3465"
        placeholder="Si instale todo bien, esto se deberia ver"
      />
      <Stack spacing={3}>
        <Text>PRUEBAS DE INSTALACION</Text>
      </Stack>
    </Stack>
  )
}
export default Home