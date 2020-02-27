import React from 'react'
import { Stack, Image, Text, Button, Box } from '@chakra-ui/core'
export default function CardProfile({ user, history }) {
  return (
    <Box
      p={5}
      shadow="lg"
      borderWidth="1px"
      w="350px"
      mt="10vh"
      backgroundColor="bg.100"
      bor
    >
      <Stack spacing={3}>
        <Image
          rounded="full"
          size="150px"
          src={user.photoURL}
          alt={user.name}
        />
        <Text fontWeight="bold">{user.name}</Text>
        <Button
          size="lg"
          color="white"
          variantColor="bttn"
          backgroundColor="bttn.500"
        >
          Editar foto
        </Button>
      </Stack>
    </Box>
  )
}