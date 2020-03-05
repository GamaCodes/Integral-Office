import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../../context'
import { Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Flex } from "@chakra-ui/core";

function Quotation ({ history }) {
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  // const go = path => history.push(path);
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
          src="../quotation.png"
          alt="IntegralOffice"
        />
      </Stack>
      <Stack backgroundColor="white">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Cotizacion Resumida</Tab>
          <Tab>Cotizacion Detallada</Tab>
          <Tab>Cotizacion para cliente</Tab>
        </TabList>
        <TabPanels>
        <TabPanel>
          <Flex justify="center" w="50vw">
            <img
              className="d-block w-100"
              src="http://www.itsm-tlapa.edu.mx/master/images/Blog/construccion.jpg"
              alt="En mantenimiento"
              justify="center"
            />
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex justify="center" w="50vw">
            <img
              className="d-block w-100"
              src="http://www.itsm-tlapa.edu.mx/master/images/Blog/construccion.jpg"
              alt="En mantenimiento"
              justify="center"
            />
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex justify="center" w="50vw">
            <img
              className="d-block w-100"
              src="http://www.itsm-tlapa.edu.mx/master/images/Blog/construccion.jpg"
              alt="En mantenimiento"
              justify="center"
            />
          </Flex>
        </TabPanel>
        </TabPanels>
      </Tabs>
      </Stack>
    </Stack>
  )}

export default Quotation;