import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import Profile from '../../components/CardProfile'
import { Flex } from '@chakra-ui/core'
export default function CardProfile({ history }) {
  const context = useContext(MyContext)
  
  // aqui dice component did mount, si no lo ven, les hace falta chelas
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged, loggedUser } = context.state
        if (isLogged)
          return (
            <Flex
            backgroundColor="c1.100"
            w="100vw"
            h="90vh"
            align="center"
            justify="center"
            >
              <Profile user={loggedUser} history={history} />
            </Flex>
          )
        else return <>Loading...</>
      }}
    </MyContext.Consumer>
  )
}