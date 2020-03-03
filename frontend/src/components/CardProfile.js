import React, { useContext} from 'react'
import {MyContext} from '../context'
import { 
  Stack, 
  Image, 
  Icon, 
  Button, 
  Box, 
  InputLeftAddon, 
  InputGroup,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  useDisclosure,
  Input,
  FormLabel,
  ModalFooter,
  Flex
 } from '@chakra-ui/core'
import { IoIosBusiness } from "react-icons/io"
export default function CardProfile({ user, history, white, width, height }) {
 const context = useContext(MyContext)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
   const finalRef = React.useRef();
  const updateToContext = (e) => {
    context.handleUpdateSubmit( e )
    .then(response => {
      console.log(response)
    }).catch(err => err)
  }
  return (
    <MyContext.Consumer>
    {context =>
      {
        return(
    
          <Box
            backgroundColor='white'
            w={width || '80vw'}
            h={height || '70vh'}
            boxShadow="xl"
          >
            <Stack spacing={3}>
            <Flex justify="center">
              <Image
                rounded="full"
                size="150px"
                src={user.imgURL}
                alt={user.name}
              />
            </Flex>
            <Flex justify="center">
              <Button
                w="10vw"
                color="white"
                variantColor="c2"
                backgroundColor="c2.100"
              >
                Editar foto
              </Button>
            </Flex>
            

            <Flex justify="center"> 
              <InputGroup>
              <InputLeftAddon w="4vw" children={<Box as={IoIosBusiness} size="30px" color="c2.100"/>}/>
              <InputLeftAddon w="30vw" fontWeight="bold" >{user.name}</InputLeftAddon>
              </InputGroup>
            </Flex>
            <Flex justify="center"> 
              <InputGroup>
              <InputLeftAddon w="4vw" children={<Icon name="email" size="20px" color="c2.100"/>}/>
              <InputLeftAddon w="30vw" fontWeight="bold"> {user.email}</InputLeftAddon>
              </InputGroup>
            </Flex>
            <Flex justify="center"> 
            
              <InputGroup>
              <InputLeftAddon w="4vw" children={<Icon name="calendar" size="20px" color="c2.100"/>}/>
              <InputLeftAddon w="30vw" fontWeight="bold"> {user.address} </InputLeftAddon>
              </InputGroup>
            </Flex>
            <Flex justify="center"> 
              <InputGroup>
              <InputLeftAddon w="4vw" children={<Icon name="phone" size="20px" color="c2.100"/>}/>
              <InputLeftAddon w="30vw" fontWeight="bold"> {user.phone} </InputLeftAddon>
              </InputGroup>
            </Flex>
            <Flex justify="center"> 
              <InputGroup>
              <InputLeftAddon w="4vw" children={<Icon name="add" size="20px" color="c2.100"/>}/>
              <InputLeftAddon w="30vw" fontWeight="bold"> {user.purpose} </InputLeftAddon>
              </InputGroup>
            </Flex>

            <Flex justify="center"> 

              
              <Button 
                onClick={onOpen}
                w="10vw"
                color="white"
                variantColor="c2"
                backgroundColor="c2.100"
                >
                Editar informacion
              </Button>
          
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
              <ModalOverlay />
              <ModalContent backgroundColor="c1.100">
                <ModalHeader color="c4.100">Editar informacion</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6} onSubmit={updateToContext} >
                  <FormControl >
                    <FormLabel >Nombre de la empresa</FormLabel>
                    <Input ref={initialRef} placeholder={user.name} name="name" onChange={context.handleUpdateUser} value={context.state.loggedUser ? context.state.loggedUser.name : ""} />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>email</FormLabel>
                    <Input placeholder={user.email} name="email" onChange={context.handleUpdateUser} value={context.state.loggedUser ? context.state.loggedUser.email : ""} />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Direccion</FormLabel>
                    <Input placeholder={user.address} name="address" onChange={context.handleUpdateUser} value={context.state.loggedUser ? context.state.loggedUser.address : ""}/>
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Telefono</FormLabel>
                    <Input placeholder={user.phone} name="phone" onChange={context.handleUpdateUser} value={context.state.loggedUser ? context.state.loggedUser.phone: ""}/>
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Giro</FormLabel>
                    <Input placeholder={user.purpose} name="purpose" onChange={context.handleUpdateUser} value={context.state.loggedUser ? context.state.loggedUser.purpose : ""}/>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button 
                    color="white"
                    variantColor="c2"
                    backgroundColor="c2.100" 
                    mr={3}
                    onClick={context.handleUpdateUserSubmit}>
                    
                    Guardar Informacion
                  </Button>
                  <Button 
                  onClick={onClose}
                  backgroundColor="c3.100"
                  color="white"
                  >
                  Salir
                  </Button>
                </ModalFooter>
              </ModalContent>
              </Modal>
            </Flex>
            </Stack>
          </Box>
          )

      }
    }  
    </MyContext.Consumer>
  )
}