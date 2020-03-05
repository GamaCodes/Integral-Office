import React, {useState}  from "react";
 import {
  Stack,
  Button,
  Text,
  Badge,
  Box,
  Flex
} from "@chakra-ui/core";
import { Carousel } from 'react-bootstrap';

const service = [
  {
    name:'Inventario',
    src:'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?cs=srgb&dl=men-going-around-a-warehouse-1797428.jpg&fm=jpg',
    text:'Inventario   blablabla blablabla v vblablabla blablabla blablabla blablabla blablabla blablabla Inventario   blablabla blablabla v vblablabla blablabla blablabla blablabla blablabla blablabla Inventario   blablabla blablabla v vblablabla blablabla blablabla blablabla blablabla blablabla Inventario   blablabla blablabla v vblablabla blablabla blablabla blablabla blablabla blablabla Inventario   blablabla blablabla v vblablabla blablabla blablabla blablabla blablabla blablabla Inventario   blablabla blablabla v vblablabla blablabla blablabla blablabla blablabla blablabla Inventario   blablabla blablabla v vblablabla blablabla blablabla blablabla blablabla blablabla Inventario   blablabla blablabla v vblablabla blablabla blablabla blablabla blablabla blablabla '
  },
  {
    name:'Cotizaciones',
    src:'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?cs=srgb&dl=person-holding-black-pen-1109541.jpg&fm=jpg',
    text:'Cotizaciones'
  },
  {
    name:'Compras',
    src:'https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?cs=srgb&dl=blur-business-coffee-commerce-273222.jpg&fm=jpg',
    text:'Compras'
  },
  {
    name:'Ventas',
    src:'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?cs=srgb&dl=blank-business-composition-computer-373076.jpg&fm=jpg',
    text:'Ventas'
  },
  {
    name:'Contabilidad',
    src:'https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?cs=srgb&dl=accounting-analytics-balance-black-and-white-209224.jpg&fm=jpg',
    text:'Contabilidad'
  },{
    name:'Finanzas',
    src:'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?cs=srgb&dl=person-holding-blue-ballpoint-pen-on-white-notebook-669610.jpg&fm=jpg',
    text:'Cuentas'
  }
]

function Home({ width, history }) {
  const go = path => history.push(path);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
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
          src="../name.png"
          alt="IntegralOffice"
        />
      </Stack>

      <Flex  
        align="center"
        justify="center"
      >

        <Box
            mt="1"
            fontWeight="semibold"
            color="white"
          >
            <Text fontSize={["xl", "2xl", "3xl"]}>Somos tu aliado en automatizacion de procesos</Text>
            <Text fontSize={["xl", "2xl", "3xl"]}> administrativos para cada sector de tu empresa.</Text>
        </Box>

      </Flex>
      <Stack alignItems="center" marginLeft={["1vw", '10vw', '20vw']} marginRight={["1vw", '10vw', '20vw']}>
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        {
          service.map((e, i) => {
            return (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={e.src}
                  alt={e.name}
                />
                <Carousel.Caption>
                  <Badge rounded="full" px="2" variantColor="c3" mb={["30vw", '45vw', "60vh"]}>
                    <Text fontSize="xl" color="white">{e.name}</Text>
                  </Badge>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
        </Carousel>
      </Stack>

      
      <Flex  
        align="center"
        justify="center"
      >
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="white">
          <Box p="6">
            <Flex justify="center" >
              <Box d="flex" alignItems="baseline">
                <Badge rounded="full" px="2" variantColor="teal" color="c2.100" m={3}>
                  Automatizacion
                </Badge>
                <Badge rounded="full" px="2" variantColor="teal" color="c2.100" m={3}>
                  Gestion
                </Badge>
                <Badge rounded="full" px="2" variantColor="teal" color="c2.100" m={3}>
                  Planificacion
                </Badge>
              </Box>
            </Flex>
            <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  color="c2.100"
                >
                  Ventajas de Integral Office
              </Box>
              <Box textAlign="left" mt={5} ml={3} mr={3}>
                <ul>
                  <li>Disponibilidad de la información de la empresa en una misma plataforma.</li>
                  <br></br>
                  <li>Integración de las distintas bases de datos de una compañía en un solo programa.</li>
                  <br></br>
                  <li>Ahorro de tiempo y costes.</li>
                  <br></br>
                  <li>Exportamos tu base de datos de excel</li>
                </ul>
              </Box>
            </Box>
        </Box>
      </Flex>
    
      <Stack alignItems="center">
        <Button
          backgroundColor="c2.100"
          color="white"
          onClick={() => go("/signup")}
        >
          Comience ahora!
        </Button>
      </Stack>
      <br></br>
      <Stack spacing={3}>
        <Text>Aun tienes dudas? Contactanos</Text>
        <Text>integral-office@gmail.com | Tel: 55 5417 8003 </Text>
      </Stack>
    </Stack>
  );
}
export default Home;
