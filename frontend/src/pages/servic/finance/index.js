import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../../context'
import { Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Flex, Icon } from "@chakra-ui/core";
import { Table } from 'react-bootstrap';

function Finance ({ history }) {
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
          src="../finance.png"
          alt="IntegralOffice"
        />
      </Stack>
      <Stack backgroundColor="white">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Cuentas Por Pagar</Tab>
          <Tab>Cuentas Por Cobrar</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Flex justify="center">
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Cogido de Proveedor</th>
                  <th>Proveedor</th>
                  <th>Monto</th>
                  <th>Fecha de pago</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>000A1</td>
                  <td>Balatron</td>
                  <td>6,000</td>
                  <td>20/03/20</td>
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
                  <th>Cogido de Cliente</th>
                  <th>Cliente</th>
                  <th>Monto</th>
                  <th>Fecha de pago</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0001A</td>
                  <td>MABE</td>
                  <td>60,000</td>
                  <td>10/03/20</td>
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

export default Finance;