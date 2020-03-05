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
        history.push('/login')
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
            <Form submit={submit} bgColor="white" title="Agregar Producto">
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Nombre"
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
                    placeholder="Insumos"
                    name="direction"
                    type="text"
                    value={context.state.formProduct.direction}
                    onChange={context.handleProductInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="descripcion"
                    name="descripcion"
                    type="text"
                    value={context.state.formProduct.descripcion}
                    onChange={context.handleProductInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input placeholder="Plano de producto"/>
                  <Input  placeholder="descripcion"w="25vw" type="file" name="blueprint" onChange={context.uploadPhoto} />
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
