import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../../context'
import { Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Flex, Button, Icon } from "@chakra-ui/core";
import { Table } from 'react-bootstrap';

function Finance ({ history }) {
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
          src="../finance.png"
          alt="IntegralOffice"
        />
      </Stack>
      <Stack backgroundColor="white">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Creditos</Tab>
          <Tab>Pagos</Tab>
          <Tab>Conciliaciones</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Flex justify="center">
            <Button
              backgroundColor="c2.100"
              color="white"
              w="10vw"
              onClick={() => go("/services/finance")} 
            >
            Agregar Credito
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Proveedor</th>
                  <th>Descripcion</th>
                  <th>Periodo</th>
                  <th>Monto</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1/03/20</td>
                  <td>Balatron</td>
                  <td>Credito de materia prima</td>
                  <td>6 meses</td>
                  <td>$ 60,000</td>
                  <th><Icon name="view"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </tbody>
            </Table>
          </Stack>
          </TabPanel>
          <TabPanel>
          <Flex justify="center">
            <Button
              backgroundColor="c2.100"
              color="white"
              w="10vw"
              onClick={() => go("/services/finance")} 
            >
            Agregar Pago
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Concepto</th>
                  <th>Descripcion</th>
                  <th>Monto</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10/02/20</td>
                  <td>Credito</td>
                  <td>Primer pago de Credito Balatron</td>
                  <td>6,000</td>
                  <th><Icon name="view"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </tbody>
            </Table>
          </Stack>
          </TabPanel>
          <TabPanel>
          <Flex justify="center">
            <Button
              backgroundColor="c2.100"
              color="white"
              w="13vw"
              onClick={() => go("/services/finance")} 
            >
            Agregar movimiento
            </Button>
          </Flex>
          <Flex justify="center" w="50vw">
            <img
              className="d-block w-100"
              src="/construccion.jpg"
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

export default Finance;