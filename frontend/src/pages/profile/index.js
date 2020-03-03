import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import Profile from '../../components/CardProfile'
import { Flex, Input, InputLeftAddon } from '@chakra-ui/core'
export default function CardProfile({ history }) {
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged, loggedUser } = context.state
        if (isLogged)
          return (
            <>
            <Flex
            backgroundColor="c1.100"
            w="100vw"
            h="90vh"
            align="center"
            justify="center"
            
            >
              <Profile user={loggedUser} history={history} />
              
              
            </Flex>
            <Flex 
            justify="center" 
            backgroundColor="c1.100"
            align="center"
            h="10vh"
            >
              <InputLeftAddon w="10vw" fontWeight="bold"> Editar Logo </InputLeftAddon>
              <Input w="25vw" type="file" name="imgURL" onChange={context.uploadPhoto} />
            </Flex>
            </>
          )
        else return <>Loading...</>
      }}
    </MyContext.Consumer>
  )
}