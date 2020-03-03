import React from "react";
import { Stack, Text } from "@chakra-ui/core";

function Accounting ({ history }) {
  // const go = path => history.push(path);
  return (
    <Stack
      minH="90vh"
      backgroundColor="c1.100"
      textAlign="center"
      w="100vw"
      p={8}
      spacing={8}
    >
      <Stack alignItems="center" marginLeft={["17vw", '10vw', '38vw']} w={["50vw", '50vw', '20vw']}>
        <img
          className="d-block w-100"
          src="../NameIO.png"
          alt="IntegralOffice"
        />
        <Text>
            Privacidad
        </Text>
      </Stack>
    </Stack>
  )}

export default Accounting;