import React from 'react'
import {
  Stack,
  Heading,
  Box,
  Input,
  Button,
  Text,
  Collapse
  // SimpleGrid
} from '@chakra-ui/core'
// import { MyContext } from '../../context'
function Home({ width, history }) {
  // const context = useContext(MyContext)
  // const { feed } = context.state
  const go = path => history.push(path)
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Stack
      mt="10vh"
      minH="90vh"
      backgroundColor="bg.100"
      textAlign="center"
      w="100vw"
      p={8}
      spacing={8}
    >
      <Heading as="h1" size="2xl" color="white">
        I
        <Box as="span" color="#314455">
        NTEGRAL
        </Box>
        <Box as="span" color="#white">
        -
        </Box>

        <Box as="span" color="#314455">
         OFFIC
        </Box>
        <Box as="span" color="#white">
        E
        </Box>
      </Heading>
      <Collapse startingHeight={20} isOpen={show}>
        BLABLABLALBALBALBALBLABABBLA BLABLALBALBALBALBLABABBL
        ABLABLALB ALBALBALBLABABBLAB LABLALBAL BALBALBL ABABBLAB
        LABLALBALBALBALBLABAB. SI PUEDES LEER ESTO SIGNIFICA QUE HICE TODO BIEN Y FUNCIONA.
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem" >
        Mostrar {show ? "menos" : "mas"}
      </Button>

      <Input
        borderBottomColor="#1e1e1e"
        variant="flushed"
        focusBorderColor="#ff3465"
        placeholder="Si instale todo bien, esto se deberia ver"
      />

      <Stack alignItems="center" >
        <Button
            backgroundColor="bttn.100"
            variantColor="bttn"
            onClick={() => go('/signup')}
          >
            Comience ahora!
          </Button>
      </Stack>
      <br></br>
      <Stack spacing={3}>
        <Text>Aun tienes dudas? Contactanos</Text>
        <Text>Email. integral-office@gmail.com | Tel: 55 5417 8003 </Text>
         
      </Stack>
      
    </Stack>
  )
}
export default Home