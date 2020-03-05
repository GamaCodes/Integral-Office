import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../../context'
import { Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Flex, Button, Icon } from "@chakra-ui/core";
import { Table } from 'react-bootstrap';

function Purchases ({ history }) {
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
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
          src="../purchases.png"
          alt="IntegralOffice"
        />
      </Stack>
      <Stack backgroundColor="white">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Insumos</Tab>
          <Tab>Nomina</Tab>
          <Tab>Servicios</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Flex justify="center">
            <Button
              backgroundColor="c2.100"
              color="white"
              w="15vw" 
            >
            + Compra de Insumo
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
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>27/02/20</td>
                  <td>Officinas</td>
                  <td>Compra de productos de papeleria</td>
                  <td>600</td>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
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
              w="15vw"
            >
            + Pago de Nomina
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Puesto</th>
                  <th>Nombre</th>
                  <th>Monto</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1/03/20</td>
                  <td>Contadora</td>
                  <td>Maria del Carmen Alvarez Romo</td>
                  <td>7500</td>

                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
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
              w="12vw"
            >
            + Pago de Servicios
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Servicio</th>
                  <th>Descripcion</th>
                  <th>Monto</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1/03/20</td>
                  <td>Luz</td>
                  <td>Pago de luz primer bimestre</td>
                  <td>600</td>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </tbody>
            </Table>
          </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Stack>
    </Stack>
  )}

export default Purchases;