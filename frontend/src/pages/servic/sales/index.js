import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../../context'
import { Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Flex, Button, Icon } from "@chakra-ui/core";
import { Table } from 'react-bootstrap';

function Sales ({ history }) {
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
          src="../sales.png"
          alt="IntegralOffice"
        />
      </Stack>
      <Stack backgroundColor="white">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Cotizacion</Tab>
          <Tab>Pedido</Tab>
          <Tab>Remision</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Flex justify="center">
            <Button
                backgroundColor="c2.100"
                color="white"
                w="13vw"
              >
                Agregar Cotizacion
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Codigo</th>
                  <th>Cliente</th>
                  <th>Producto</th>
                  <th>Tiempo de Entrega</th>
                  <th>Cantidad</th>
                  <th>Monto</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1/03/20</td>
                  <td>A001</td>
                  <td>MABE</td>
                  <td>Arnes 0061</td>
                  <td>10 dias</td>
                  <td>500 pzas</td>
                  <td>1900</td>
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
                w="12vw"
              >
                Agregar Pedido
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Codido de Pedido</th>
                  <th>Cliente</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Monto</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>5/02/20</th>
                  <th>P001</th>
                  <th>MABE</th>
                  <th>Arnes 004 con terminal de cobre</th>
                  <th>500pzas</th>
                  <th>8950</th>
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
                  <th>Fecha</th>
                  <th>Codigo de Pedido</th>
                  <th>Descripcion</th>
                  <th>Monto</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>5/02/20</th>
                  <th>P001</th>
                  <th>Venta de Arneses</th>
                  <th>8950</th>
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

export default Sales;