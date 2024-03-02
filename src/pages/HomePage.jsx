import React from "react";
import { Box, Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";

const HomePage = () => {
  const artists = ["Artist 1", "Artist 2", "Artist 3", "Artist 4"];

  return (
    <VStack spacing={8}>
      <Heading as="h1" size="xl">
        Artists
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        {artists.map((artist, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="lg">
              {artist}
            </Heading>
            <Text mt={4}>Some info about {artist}...</Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default HomePage;
