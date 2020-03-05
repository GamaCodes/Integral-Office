import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../../context'
import { Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Flex, Button } from "@chakra-ui/core";

function Accounting ({ history }) {
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
          src="../accounting.png"
          alt="IntegralOffice"
        />
      </Stack>
      <Stack backgroundColor="white">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Facturas</Tab>
          <Tab>Declaraciones</Tab>
          <Tab>Facturacion</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Flex justify="center">
          <Button
            backgroundColor="c2.100"
            color="white"
            w="10vw"
            onClick={() => go("/services/accounting/bills")} 
          >
          Descargar Facturas
          </Button>
        </Flex>
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
  )
}
  
export default Accounting;