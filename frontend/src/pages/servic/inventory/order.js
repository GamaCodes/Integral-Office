import React, { useEffect, useContext } from 'react'
import {
  Flex,
  FormControl,
  InputGroup,
  Input,
  useToast,
  Button
} from '@chakra-ui/core'
import { MyContext } from '../../../context'
import Form from '../../../components/Form'

export default function Signup({ history }) {
  const context = useContext(MyContext)
  const go = path => history.push(path);
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  const toast = useToast()
  const submit = e => {
    context
      .handleProductSubmit(e)
      .then(response => {
        toast({
          title: 'Producto creado.',
          description: "El producto ha sido creado satisfactoriamente",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/services/inventory')
      })
      .catch(err => {
        toast({
          title: 'Algo salio muy mal',
          description: 'No se pudo crear tu producto',
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
            <Form submit={submit} bgColor="white" title="Ingregar Orden">
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Insumo"
                    name="name"
                    type="text"
                    value={context.state.formProduct.name}
                    onChange={context.handleProductInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Cantidad Requerida"
                    name="direction"
                    type="text"
                    value={context.state.formProduct.direction}
                    onChange={context.handleProductInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input placeholder="Fecha"/>
                </InputGroup>
              </FormControl>
              <Button
              backgroundColor="c2.100"
              color="white"
              type="submit"
              w={["30vw", '20vw', '10vw']}
              justify="center"
              onClick={() => go("/services/inventory")}
            >
              Salir
            </Button>
            </Form>
          </Flex>
        )
      }}
    </MyContext.Consumer>
  )
}
