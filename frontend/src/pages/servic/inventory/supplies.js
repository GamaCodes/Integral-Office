import React, { useContext } from 'react'
import {
  Flex,
  FormControl,
  InputGroup,
  Input,
  useToast
} from '@chakra-ui/core'
import { MyContext } from '../../context'
import Form from '../../components/Form'
export default function Supplies({ history }) {
  const toast = useToast()
  const context = useContext(MyContext)
  const submit = e => {
    context
      .handleSignupSubmit(e)
      .then(response => {
        toast({
          title: 'Insumo Creado.',
          description: "Tu insumo ha sido creada satisfactoriamente",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/login')
      })
      .catch(err => {
        toast({
          title: 'Algo salio muy mal',
          description: 'No se pudo crear tu insumo verifica e intenta nuevamente',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      })
  }
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Flex
            backgroundColor="c1.100"
            w="100vw"
            h="90vh"
            align="center"
            justify="center"
          >
            <Form submit={submit} bgColor="white" title="Agregar Insumo">
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Codigo de Materia prima"
                    name="codigo"
                    type="text"
                    value={context.state.formSignup.codigo}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Tipo de materia prima"
                    name="codigo"
                    type="text"
                    value={context.state.formSignup.codigo}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Descripcion"
                    name="descripcion"
                    type="text"
                    value={context.state.formSignup.description}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="Codigo de Proveedor"
                    name="codProv"
                    type="text"
                    value={context.state.formSignup.codProv}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="Unidad de Medida"
                    name="unidadMed"
                    type="text"
                    value={context.state.formSignup.unidadMed}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Precio Unitario"
                    name="precioUnit"
                    type="number"
                    value={context.state.formSignup.precioUnit}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Actividad comercial"
                    name="actComer"
                    type="text"
                    value={context.state.formSignup.actComer}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Tipo de moneda"
                    name="moneda"
                    type="text"
                    value={context.state.formSignup.moneda}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Gastos de importacion"
                    name="gastosImp"
                    type="text"
                    value={context.state.formSignup.gastosImp}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Cantidad en Almacen"
                    name="cantAlmacen"
                    type="text"
                    value={context.state.formSignup.cantAlmacen}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Piezas por empaque"
                    name="modEmpaque"
                    type="text"
                    value={context.state.formSignup.modEmpaque}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="codigo de materia prima (proveedor)"
                    name="codMppProv"
                    type="text"
                    value={context.state.formSignup.codMppProv}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Cantidad minima en stock"
                    name="cantMinima"
                    type="text"
                    value={context.state.formSignup.cantMinima}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Tiempo de entrega de materia prima"
                    name="tiempoEntrega"
                    type="text"
                    value={context.state.formSignup.tiempoEntrega}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Periodo a ordenar"
                    name="periodoOrdenar"
                    type="text"
                    value={context.state.formSignup.periodoOrdenar}
                  />
                </InputGroup>
              </FormControl>
            </Form>
          </Flex>
        )
      }}
    </MyContext.Consumer>
  )
}
