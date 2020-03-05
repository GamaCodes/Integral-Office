import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../../context'
import { Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Flex, Button, Icon } from "@chakra-ui/core";
import { Table } from 'react-bootstrap';

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
          <Tab>Ingresos</Tab>
          <Tab>Egresos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Flex justify="center">
            <Button
              backgroundColor="c2.100"
              color="white"
              w="12vw"
              onClick={() => go("/services/accounting/bills")} 
            >
            Descargar Facturas
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Factura</th>
                  <th>Descripcion</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1/03/20</td>
                  <td>#1113</td>
                  <td>Compra de productos de papeleria</td>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </tbody>
            </Table>
          </Stack>
          </TabPanel>
          <TabPanel>
            <Flex justify="center" w={["50vw", '50vw', '50vw']}>
              <img
                className="d-block w-100"
                src="http://www.itsm-tlapa.edu.mx/master/images/Blog/construccion.jpg"
                alt="En mantenimiento"
                justify="center"
              />
            </Flex>
          </TabPanel>
          <TabPanel>
          <Flex justify="center">
            <Button
              backgroundColor="c2.100"
              color="white"
              w="12vw"
              onClick={() => go("/services/accounting")} 
            >
            Resumen
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Tipo</th>
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
                  <td>Pago de Nomina</td>
                  <td>Quincena Samantha M.</td>
                  <td>9400</td>
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
              onClick={() => go("/services/accounting/bills")} 
            >
            Resumen
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Tipo</th>
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
                  <td>Ventas de mostrador</td>
                  <td>Ventas mostrador del 1/03/20</td>
                  <td>45000</td>
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
  )
}
  
export default Accounting;