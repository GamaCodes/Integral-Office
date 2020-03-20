import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../../context'
import { Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Flex, Button, Icon } from "@chakra-ui/core";
import { Table } from 'react-bootstrap';

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
          src="../Catalogos.png"
          alt="IntegralOffice"
        />
      </Stack>
      <Stack backgroundColor="white">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Clientes</Tab>
          <Tab>Proveedores</Tab>
          <Tab>Proyectos</Tab>
        </TabList>
        <TabPanels>
        <TabPanel>
          <Flex justify="center">
            <Button
              backgroundColor="c2.100"
              color="white"
              w="12vw"
            >
            Agregar Cliente
            </Button>
          </Flex>
          <Stack m={3}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Nombre</th>
                  <th>Direccion</th>
                  <th><Icon name="view"/></th>
                  <th><Icon name="edit"/></th>
                  <th><Icon name="delete"/></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0010A</td>
                  <td>Luis Angel Araujo Alvarez</td>
                  <td>Pergolas 947, San Luis</td>
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
              Agregar Proveedor
              </Button>
            </Flex>
            <Stack m={3}>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Codigo</th>
                      <th>Nombre</th>
                      <th>RFC</th>
                      <th>Domicilio</th>
                      <th><Icon name="view"/></th>
                      <th><Icon name="edit"/></th>
                      <th><Icon name="delete"/></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>000AA1</td>
                      <td>Balatron</td>
                      <td>BLTN2609204DF</td>
                      <td>Carretera federal 127, Celaya</td>
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
              Agregar Proyecto
              </Button>
            </Flex>
            <Stack m={3}>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Codigo</th>
                      <th>Proyecto</th>
                      <th>Codigo de Cliente</th>
                      <th>Cliente</th>
                      <th>Nota</th>
                      <th><Icon name="view"/></th>
                      <th><Icon name="edit"/></th>
                      <th><Icon name="delete"/></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01A</td>
                      <td>Arnes 0061</td>
                      <td>0010A</td>
                      <td>MABE</td>
                      <td>Muestra fisica</td>
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

export default Quotation;