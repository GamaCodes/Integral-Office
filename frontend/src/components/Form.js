import React from 'react'
import { Box, Stack, Button, Heading } from '@chakra-ui/core'
function Form({ width, children, title, submit, bgColor }) {
  return (
    <Box
      backgroundColor={bgColor}
      onSubmit={submit}
      as="form"
      w={["90vw", '70vw', '50vw']}
      boxShadow="xl"
    >
      <Stack spacing={8} p={8}>
        <Heading textAlign="center" as="h1">
          {title}
        </Heading>
        {children}
        <Button
          backgroundColor="c2.100"
          color="white"
          type="submit"
          w={["30vw", '20vw', '10vw']}
          justify="center"
        >
          {title}
        </Button>
      </Stack>
    </Box>
  )
}
export default Form