import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  IconButton
} from "@chakra-ui/core"
import { MyContext } from '../context'

function Navbar({ history }) {
  const go = path => history.push(path)
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Flex
            
            top={0}
            zIndex="99"
            backgroundColor="c2.100"
            w="100vw"
            h="10vh"
            align="center"
            justify="space-between"
          >
            <Text onClick={() => go('/')} w={["12vw", '5vw', '3.5vw']} ml="2vw">
            <img
              className="d-block w-100"
              src="../Logo.png"
              alt="IntegralOffice"
            />
            </Text>
            <Menu >
              <MenuButton
                as={IconButton}
                variant="outline"
                backgroundColor="white"
                variantColor="whity"
                aria-label="Menu"
                size="lg"
                icon="menu"
                mr={["2vw", '2vw', '2vw']}
              ></MenuButton>
              <MenuList>
                {!context.state.isLogged && (
                  <>
                    <MenuItem onClick={() => go('/')}>Inicio</MenuItem>
                    <MenuItem onClick={() => go('/login')}>Iniciar sesion</MenuItem>
                    <MenuItem onClick={() => go('/signup')}>Registrate</MenuItem>
                  </>
                )}
                {context.state.isLogged && (
                  <>
                    <MenuItem onClick={() => go('/services')}>Servicios</MenuItem>
                    <MenuItem onClick={() => go('/profile')}>Perfil</MenuItem>
                    <MenuItem onClick={context.handleLogout}>Cerrar sesion</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Flex>
        )
      }}
    </MyContext.Consumer>
  )
}
export default withRouter(Navbar)