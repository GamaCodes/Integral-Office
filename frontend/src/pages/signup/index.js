import React, { useContext } from 'react'
import { IoIosBusiness } from "react-icons/io"
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon,
  useToast,
  Box
} from '@chakra-ui/core'
import { MyContext } from '../../context'
import Form from '../../components/Form'
export default function Signup({ history }) {
  const toast = useToast()
  const context = useContext(MyContext)
  const submit = e => {
    context
      .handleSignupSubmit(e)
      .then(response => {
        toast({
          title: 'Cuenta Creada.',
          description: "Tu cuenta ha sido creada satisfactoriamente",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/login')
      })
      .catch(err => {
        toast({
          title: 'Algo salio muy mal',
          description: 'No se pudo crear tu cuenta',
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
            <Form submit={submit} bgColor="white" title="Registrate">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Box as={IoIosBusiness} color="white"/>} />
                  <Input
                    placeholder="Nombre de la empresa."
                    name="name"
                    type="text"
                    value={context.state.formSignup.name}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="email" color="c2.100"/>} />
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Email."
                    name="email"
                    type="email"
                    value={context.state.formSignup.email}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="calendar" color="c2.100"/>} />
                  <Input
                    placeholder="Direccion"
                    name="address"
                    type="text"
                    value={context.state.formSignup.address}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="phone" color="c2.100"/>} />
                  <Input
                    placeholder="Telefono"
                    name="phone"
                    type="number"
                    value={context.state.formSignup.phone}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="add" color="c2.100"/>} />
                  <Input
                    placeholder="Giro"
                    name="purpose"
                    type="text"
                    value={context.state.formSignup.purpose}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="lock" color="c2.100" />} />
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Contraseña"
                    name="password"
                    type="password"
                    value={context.state.formSignup.password}
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
