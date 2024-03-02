import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex bg="gray.100" p={4} justifyContent="space-between" alignItems="center">
      <Text fontSize="xl" fontWeight="bold">
        Art NFT
      </Text>
      <Box>
        <Link to="/">Home</Link>
        <Link to="/buy-nft" ml={4}>
          Buy NFT
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
