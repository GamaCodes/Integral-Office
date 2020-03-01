import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Box
} from '@chakra-ui/core'
import { MyContext } from '../context'

function Footer({ history }) {
  const go = path => history.push(path)
  return (
    <MyContext.Consumer>
    {context => {
        return (
        <>
          <Flex
              
              bottom={0}
              zIndex="99"
              textAlign="center"
              backgroundColor="c3.100"
              w="100vw"
              h="10vh"
              justify="center"
          >
            <Box onClick={() => go('/')} w={["12vw", '5vw', '3.5vw']} mt={3} >
              <img
                src="../Logo.png"
                alt="IntegralOffice"
              />
            </Box>
          </Flex>
          <Breadcrumb 
            separator="-"   
            spacing={3} 
            color="c1.100" 
            bottom={0}
            zIndex="99"
            textAlign="center"
            backgroundColor="c3.100"
            w="100vw"
            h="3vh"
            justify="center">
            <BreadcrumbItem mt={1}>
              <BreadcrumbLink onClick={() => go('/')} color="c1.100" > Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => go('/')} color="c1.100">Privacidad</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink onClick={() => go('/')} color="c1.100">Ayuda</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box 
            href="/contact" 
            color="c1.100"
            textAlign="center"
            backgroundColor="c3.100"
            w="100vw"
            h="5vh"
            justify="center"
            >
            Terminos y Condiciones
            </Box>
        </>
        )       
    }}
    </MyContext.Consumer>
  )
}
export default withRouter(Footer)




