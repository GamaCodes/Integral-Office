import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../../context'
import { Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Button, Flex, Icon } from "@chakra-ui/core";
import { Table } from 'react-bootstrap';
import INTEGRAL_SERVICE from '../../../services/index'

function Inventory ({ history }) {
  const context = useContext(MyContext)
  const deleteSupplie = async (e,id)=>{
    await INTEGRAL_SERVICE.DELETESUPPLIE(e,id)
  } 
  
  const updateSupplie = async(e,supplie)=>{
    await context.UPDATESUPPLIE(e,supplie)
  }
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
    context.getSupplies()

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
      <Stack backgroundColor="white">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Insumos </Tab>
          <Tab>Productos</Tab>
          <Tab>Stock</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex justify="center">
              <Button
                  backgroundColor="c2.100"
                  color="white"
                  w="10vw"
                  onClick={() => go("/services/inventory/supplies")}
                >
                  + Agregar Insumo
              </Button>
            </Flex>
          <Stack m={3}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Descripcion</th>
                    <th>Proveedor</th>
                    <th>Precio</th>
                    <th><Icon name="view"/></th>
                    <th><Icon name="edit"/></th>
                    <th><Icon name="delete"/></th>
                  </tr>
                </thead>
                {context.state.supplies.map((supplie, id) => (
                <tbody key={id} >
                  <tr>
                    <td>{supplie.tipo}</td>
                    <td>{supplie.descripcion}</td>
                    <td>{supplie.proveedor}</td>
                    <td>{supplie.precioUnit}</td>
                    <td><Icon name="view" onClick={(e)=>{} }/></td>
                    <td><Icon name="edit" onClick={(e)=>{updateSupplie(e,supplie._id)} }/></td>
                    <td><Icon name="delete" onClick={(e)=>context.deleteSupplie(e,supplie._id) }/></td>
                  </tr>
                </tbody>
                ))}
              </Table>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Flex justify="center">
              <Button
                backgroundColor="c2.100"
                color="white"
                w="12vw"
                onClick={() => go("/services/inventory/products")}
              >
              + Agregar Producto
              </Button>
            </Flex>
            <Stack m={3}>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Descripcion</th>
                      <th>Precio</th>
                      <th><Icon name="view"/></th>
                      <th><Icon name="edit"/></th>
                      <th><Icon name="delete"/></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PRODUCTO</td>
                      <td>PRODUCTO PRUEBA</td>
                      <td>10000</td>
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
                w="11vw"
                onClick={() => go("/services/inventory/order")}
              >
                Crear Orden
              </Button>
            </Flex>
            <Stack m={3}>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Codigo</th>
                      <th>Descripcion</th>
                      <th>Stock Disponible</th>
                      <th>Stock Minimo</th>
                      <th>Diferencia</th>
                      <th>Pedido</th>
                    </tr>
                  </thead>
                  {context.state.supplies.map((supplie, id) => (
                  <tbody key={id}>
                    <tr>
                      <td>{supplie.tipo}</td>
                      <td>{supplie.codigo}</td>
                      <td>{supplie.descripcion}</td>
                      <td>{supplie.cantAlmacen}</td>
                      <td>{supplie.cantMinima}</td>
                      <td>{supplie.cantAlmacen-supplie.cantMinima}</td>
                      <td><Icon name="add" onClick={(e)=>{deleteSupplie(e,supplie._id)}}/></td>
                    </tr>
                  </tbody>
                  ))}
                </Table>
              </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Stack>
      
    </Stack>
  )}

export default Inventory;