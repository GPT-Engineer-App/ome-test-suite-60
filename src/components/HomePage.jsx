import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const artists = [
  { id: 1, name: "Artist 1" },
  { id: 2, name: "Artist 2" },
  { id: 3, name: "Artist 3" },
];

function HomePage() {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={6}>
        Featured Artists
      </Text>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={8}>
        {artists.map((artist) => (
          <Box key={artist.id} p={5} shadow="md" borderWidth="1px">
            <Text fontSize="xl">{artist.name}</Text>
            {}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default HomePage;
