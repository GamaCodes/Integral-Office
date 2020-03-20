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
          <Tab>Cotizacion</Tab>
          <Tab>Orden de Compra</Tab>
          <Tab>Resumen de Compras</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Flex justify="center">
            <Button
              backgroundColor="c2.100"
              color="white"
              w="15vw" 
            >
            Agregar Cotizacion
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Codigo de Insumo</th>
                  <th>Descripcion</th>
                  <th>Tiempo de entrega</th>
                  <th>Cantidad</th>
                  <th>Monto</th>
                  <th>Moneda</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>27/02/20</td>
                  <td>A.1.14.11</td>
                  <td>Cable Termoadaptable</td>
                  <td>2 dias habiles</td>
                  <td>10000 metros</td>
                  <td>600</td>
                  <td>DLLS</td>
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
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Codigo de Insumo</th>
                  <th>Insumo</th>
                  <th>Cantidad Requerida</th>
                  <th>Fecha</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A.1.14.11</td>
                  <td>Cable Termoadaptable</td>
                  <td>10000</td>
                  <td>1/03/20</td>
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
            Agregar Compra
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Tipo</th>
                  <th>Descripcion</th>
                  <th>Cantidad</th>
                  <th>Monto</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1/03/20</td>
                  <td>Nomina </td>
                  <td>Contadora -Maria del Carmen Alvarez Romo</td>
                  <td>1</td>
                  <td>7500</td>
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