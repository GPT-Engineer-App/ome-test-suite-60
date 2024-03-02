import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, useToast, VStack, Heading } from "@chakra-ui/react";
import { FaLock, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    const hardcodedEmail = "testuser@example.com";
    const hardcodedPassword = "password123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      localStorage.setItem("accessToken", "dummy-access-token");
      setIsLoggedIn(true);
      toast({
        title: "Login successful!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login failed!",
        description: "Invalid email or password.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleBuyNFT = () => {
    // Placeholder for actual buy NFT API call
    toast({
      title: "NFT purchased!",
      description: "You have successfully bought an NFT.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <Box w="100%" p={4}>
        {!isLoggedIn ? (
          <VStack spacing={4} as="form" onSubmit={handleLogin}>
            <Heading>Login</Heading>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button leftIcon={<FaSignInAlt />} colorScheme="teal" type="submit" isLoading={false}>
              Sign In
            </Button>
          </VStack>
        ) : (
          <VStack spacing={4}>
            <Heading>Welcome!</Heading>
            <Button leftIcon={<FaLock />} colorScheme="pink" onClick={handleBuyNFT}>
              Buy NFT
            </Button>
          </VStack>
        )}
      </Box>
    </Container>
  );
};

export default Index;
