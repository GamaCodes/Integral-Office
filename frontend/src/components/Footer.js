import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex
} from '@chakra-ui/core'
import { MyContext } from '../context'

function Footer({ history }) {
  // const go = path => history.push(path)
  return (
    <MyContext.Consumer>
    {context => {
        return (
        <Flex
            
            bottom={0}
            zIndex="99"
            textAlign="center"
            backgroundColor="#17252A"
            w="100vw"
            h="20vh"
            p={8}
            justify="center"
        >
                <Breadcrumb separator="-" spacing={3} color="bg.100">
                <BreadcrumbItem >
                    <BreadcrumbLink href="/" color="bg.100" > - Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/about" color="bg.100">Privacidad</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="/contact" color="bg.100">Ayuda</BreadcrumbLink>
                </BreadcrumbItem>
                <br></br>
                <BreadcrumbItem>
                        <BreadcrumbLink href="/about" color="bg.100">Terminos y Condiciones</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

        </Flex>
        )       
    }}
    </MyContext.Consumer>
  )
}
export default withRouter(Footer)




