import React, { useContext } from 'react'
import {
  Flex,
  FormControl,
  InputGroup,
  Input,
  useToast
} from '@chakra-ui/core'
import { MyContext } from '../../../context'
import Form from '../../../components/Form'
export default function Signup({ history }) {
  const toast = useToast()
  const context = useContext(MyContext)
  const submit = e => {
    context
      .handleSignupSubmit(e)
      .then(response => {
        toast({
          title: 'La propiedad ha sido creada.',
          description: "La propiedad se ha creado satisfactoriamente",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/login')
      })
      .catch(err => {
        toast({
          title: 'Algo salio muy mal',
          description: 'No se pudo crear tu propiedad',
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
                    placeholder="Imagen"
                    name="imageURL"
                    type="text"
                    value={context.state.formSignup.imageURL}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="direction"
                    name="direction"
                    type="text"
                    value={context.state.formSignup.direction}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="descripcion"
                    name="description"
                    type="number"
                    value={context.state.formSignup.description}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="price"
                    name="price"
                    type="number"
                    value={context.state.formSignup.price}
                    onChange={context.handleSignupInput}
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
