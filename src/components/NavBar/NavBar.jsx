import React from "react";
import { Box, Button } from "@chakra-ui/react";
function NavBar() {
  function alertar() {
    alert("hola");
  }
  return (
    <Box
      w="100%"
      p={4}
      bg="tomato"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Button onClick={() => alertar()} colorScheme="gray">
        Gray
      </Button>
      <Button colorScheme="gray">Home</Button>
      <Button colorScheme="gray">About us</Button>
      <Button colorScheme="gray">Products</Button>
      <Button colorScheme="gray">Profile</Button>
    </Box>
  );
}

export default NavBar;
