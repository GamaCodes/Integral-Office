import React from 'react'
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
  ModalFooter

 } from '@chakra-ui/core'
import { IoIosBusiness } from "react-icons/io"
export default function CardProfile({ user, history, white, width, height }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <Box
      backgroundColor='white'
      w={width || '80vw'}
      h={height || '70vh'}
      boxShadow="xl"
    >
      <Stack spacing={3}>
        <Image
          rounded="full"
          size="150px"
          src={user.imgURL}
          alt={user.name}
        />
        <Button
          w="10vw"
          color="white"
          variantColor="c2"
          backgroundColor="c2.100"
        >
          Editar foto
        </Button>

        <InputGroup>
        <InputLeftAddon w="4vw" children={<Box as={IoIosBusiness} size="30px" color="c2.100"/>}/>
        <InputLeftAddon w="30vw" fontWeight="bold">{user.name}</InputLeftAddon>
        </InputGroup>

        <InputGroup>
        <InputLeftAddon w="4vw" children={<Icon name="email" size="20px" color="c2.100"/>}/>
        <InputLeftAddon w="30vw" fontWeight="bold"> {user.email}</InputLeftAddon>
        </InputGroup>

        <InputGroup>
        <InputLeftAddon w="4vw" children={<Icon name="calendar" size="20px" color="c2.100"/>}/>
        <InputLeftAddon w="30vw" fontWeight="bold"> {user.address} </InputLeftAddon>
        </InputGroup>

        <InputGroup>
        <InputLeftAddon w="4vw" children={<Icon name="phone" size="20px" color="c2.100"/>}/>
        <InputLeftAddon w="30vw" fontWeight="bold"> {user.phone} </InputLeftAddon>
        </InputGroup>

        <InputGroup>
        <InputLeftAddon w="4vw" children={<Icon name="add" size="20px" color="c2.100"/>}/>
        <InputLeftAddon w="30vw" fontWeight="bold"> {user.purpose} </InputLeftAddon>
        </InputGroup>
        
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
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre de la empresa</FormLabel>
              <Input ref={initialRef} placeholder={user.name} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>email</FormLabel>
              <Input placeholder={user.email} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Direccion</FormLabel>
              <Input placeholder={user.address} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Telefono</FormLabel>
              <Input placeholder={user.phone} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Giro</FormLabel>
              <Input placeholder={user.purpose} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button 
              color="white"
              variantColor="c2"
              backgroundColor="c2.100" 
              mr={3}>
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
      </Stack>
    </Box>
  )
}