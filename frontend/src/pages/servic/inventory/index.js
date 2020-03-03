import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../../context'
import { Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Button } from "@chakra-ui/core";

function Inventory ({ history }) {
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
          src="../inventory.png"
          alt="IntegralOffice"
        />
      </Stack>
      <Button
          backgroundColor="c2.100"
          variantColor="bttn"
          w="10vw"
          onClick={() => go("/services")}
        >
          + Agregar Insumo
        </Button>
        <Button
          backgroundColor="c2.100"
          variantColor="bttn"
          w="10vw"
          onClick={() => go("/services/inventory/property")}
        >
         + Agregar Producto
        </Button>
        <Button
          backgroundColor="c2.100"
          variantColor="bttn"
          w="10vw"
          onClick={() => go("/signup")}
        >
          + Aumentar Stock
        </Button>
      <Stack backgroundColor="white">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Insumos </Tab>
          <Tab>Productos</Tab>
          <Tab>Stock</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>tree!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Stack>
      
    </Stack>
  )}

export default Inventory;