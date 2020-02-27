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
  const go = path => history.push(path)
  return (
    <MyContext.Consumer>
    {context => {
        return (
        <Flex
            pos="fixed"
            bottom={0}
            zIndex="99"
            textAlign="center"
            backgroundColor="#9E5A63"
            w="100vw"
            h="20vh"
            p={8}
            justify="center"
        >
                <Breadcrumb separator="-" spacing={3}>
                <BreadcrumbItem >
                    <BreadcrumbLink href="/"> - Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/about">Privacidad</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="/contact">Ayuda</BreadcrumbLink>
                </BreadcrumbItem>
                <br></br>
                <BreadcrumbItem>
                        <BreadcrumbLink href="/about">Terminos y Condiciones</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

        </Flex>
        )       
    }}
    </MyContext.Consumer>
  )
}
export default withRouter(Footer)