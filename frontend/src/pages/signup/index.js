import React, { useContext } from 'react'
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon,
  useToast
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
          title: 'Account created.',
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
            mt="10vh"
            backgroundColor="bg.100"
            w="100vw"
            h="90vh"
            align="center"
            justify="center"
          >
            <Form submit={submit} bgColor="white" title="Registrate">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="user" />} />
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
                  <InputLeftAddon children={<Icon name="email" />} />
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
                  <InputLeftAddon children={<Icon name="add" />} />
                  <Input
                    placeholder="Direccion"
                    name="adress"
                    type="text"
                    value={context.state.formSignup.adress}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="phone" />} />
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
                  <InputLeftAddon children={<Icon name="calendar" />} />
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
                  <InputLeftAddon children={<Icon name="lock" />} />
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
