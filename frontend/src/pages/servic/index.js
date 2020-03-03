import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
 import {
  Stack,
  Button,
  Text,
  Box,
  Image,
  Badge,
  SimpleGrid,
  Flex
} from "@chakra-ui/core";


const service = [
  {
    name:'Inventario',
    src:'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?cs=srgb&dl=men-going-around-a-warehouse-1797428.jpg&fm=jpg',
    badge:'Insumos',
    link:'inventory'
  },
  {
    name:'Cotizaciones',
    src:'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?cs=srgb&dl=person-holding-black-pen-1109541.jpg&fm=jpg',
    badge:'Cotizaciones',
    link:'quotation'
  },
  {
    name:'Compras',
    src:'https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?cs=srgb&dl=blur-business-coffee-commerce-273222.jpg&fm=jpg',
    badge:'Ordenes',
    link:'purchases'
  },
  {
    name:'Ventas',
    src:'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?cs=srgb&dl=blank-business-composition-computer-373076.jpg&fm=jpg',
    badge:'Tickets',
    link:'sales'
  },
  {
    name:'Contabilidad',
    src:'https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?cs=srgb&dl=accounting-analytics-balance-black-and-white-209224.jpg&fm=jpg',
    badge:'Descarga de facturas',
    link:'accounting'
  },{
    name:'Finanzas',
    src:'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?cs=srgb&dl=person-holding-blue-ballpoint-pen-on-white-notebook-669610.jpg&fm=jpg',
    badge:'Cuentas',
    link:'finance'
  }
]

function Services ({ history }) {
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  const go = path => history.push(path);
  return (
    <Stack
      minH="90vh"
      backgroundColor="c1.100"
      textAlign="center"
      w="100vw"
      p={8}
      spacing={8}
    >
      <Stack alignItems="center" marginLeft={["17vw", '10vw', '38vw']} w={["50vw", '50vw', '20vw']}>
        <img
          className="d-block w-100"
          src="../NameIO.png"
          alt="IntegralOffice"
        />
      </Stack>

      <Flex justify="center">
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="white">
        Seleccione el modulo al que desea ingresar
      </Box>
      </Flex>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} marginLeft="5vw" marginRigth="5vw">
      {
          service.map((e, i) => {
            return (
              <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="white" key={i}>
                <Image src={e.src} alt={e.name} />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" px="2" variantColor="teal">
                      {e.badge}
                    </Badge>
                  </Box>

                  <Button
                    backgroundColor="c2.100"
                    color="white"
                    mt="1vh"
                    onClick={() => go(`/services/${e.link}`)}
                  >
                    {e.name}
                  </Button>
                </Box>
              </Box>
            )
          })
        }
        </SimpleGrid>


        

      
      

    
      <Stack alignItems="center">
      </Stack>
      <br></br>
      <Stack spacing={3}>
        <Text>Aun tienes dudas? Contactanos</Text>
        <Text>integral-office@gmail.com | Tel: 55 5417 8003 </Text>
      </Stack>
    </Stack>
  );
}
export default Services;
