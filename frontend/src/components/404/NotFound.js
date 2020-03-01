import React from 'react';
 import {
  Stack,
} from "@chakra-ui/core";

function NotFound() {
  return (
    <Stack
      minH="70vh"
      backgroundColor="c1.100"
      textAlign="center"
      w="100vw"
      p={8}
      spacing={8}
    >
      <Stack alignItems="center" marginLeft={["1vw", '10vw', '35vw']} marginRight={["1vw", '10vw', '35vw']}>
        <img
          className="d-block w-100"
          src="../error.png"
          alt="Error404"
        />
      </Stack>
      <Stack alignItems="center" marginLeft={["1vw", '10vw', '25vw']} marginRight={["1vw", '10vw', '25vw']}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?cs=srgb&dl=addition-black-and-white-black-and-white-chalk-374918.jpg&fm=jpg"
          alt="1+1=3"
        />
      </Stack>
      <Stack alignItems="center" marginLeft={["1vw", '10vw', '35vw']} marginRight={["1vw", '10vw', '35vw']}>
        <img
          className="d-block w-100"
          src="../401.png"
          alt="Mensaje de error"
        />
      </Stack>

    </Stack>
  );
}

export default NotFound;
