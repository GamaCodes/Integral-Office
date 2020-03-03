import React, {useState}  from "react";
 import {
  Stack,
  Button,
  Text,
  Collapse,
  Badge
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
  const [show, setShow] = React.useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  const handleToggle = () => {setShow(!show)};
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
                  <Badge rounded="full" px="2" variantColor="c3" mb={["22vw", '22vw', "55vh"]}>
                    <Text fontSize="xl" color="white">{e.name}</Text>
                  </Badge>
                  <br/>
                  <Button size="sm" onClick={()=>handleToggle(i)} mt="1rem" backgroundColor="c2.100">
                    Mostrar {show ? "menos" : "mas"}
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
        </Carousel>
      </Stack>

      <Collapse startingHeight={20} isOpen={show}>
      
        <>
        <p>Integral Office</p>
        <p> Aqui debe estar la explicacion de los servicios</p>
        <p>popopopopopopopopopopopopopop</p>
        <p>popopopopopopopopopopopopopopopop</p>
        </>
      
      </Collapse>
      <br></br>
    
      <Stack alignItems="center">
        <Button
          backgroundColor="c2.100"
          variantColor="bttn"
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
