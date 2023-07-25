import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function CustomerProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("123-456-7890");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform save/update logic here (e.g., make API call)
    // For this example, we will just toggle off the editing mode
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Revert changes if any
    setFirstName("John");
    setLastName("Doe");
    setEmail("johndoe@example.com");
    setPhone("123-456-7890");
    setIsEditing(false);
  };

  return (
    <Center h="100vh" bg="#000C66">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" fontSize="4xl" color="whiteAlpha.900" fontWeight="medium" mt="16px">
          Customer Profile
        </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form >
            <Stack spacing={4} p="1rem" backgroundColor="#050A30" borderRadius="10px" boxShadow="md" >
              <FormControl>
                <FormLabel textColor="white" >First Name</FormLabel>
                <Input
                type="text"
                value={firstName}
                readOnly={!isEditing}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                borderColor="white"
                focusBorderColor="teal"
                textColor="white"
                />
              </FormControl>
              <FormControl>
                <FormLabel textColor="white">Last Name</FormLabel>
                <Input
                 type="text"
                 value={lastName}
                 readOnly={!isEditing}
                 onChange={(e) => setLastName(e.target.value)}
                 placeholder="Doe"
                 borderColor="white"
                 focusBorderColor="teal"
                 textColor="white"
                 />
              </FormControl>
              <FormControl>
                <FormLabel textColor="white" >Email</FormLabel>
                <Input
                 type="email"
                 value={email}
                 readOnly={!isEditing}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="johndoe@email.com"
                 borderColor="white"
                 focusBorderColor="teal"
                 textColor="white"
                 />
              </FormControl>
              <FormControl>
                <FormLabel textColor="white">Phone</FormLabel>
                <Input
                 type="text"
                 value={phone}
                 readOnly={!isEditing}
                 onChange={(e) => setPhone(e.target.value)}
                 placeholder="123456789"
                 borderColor="white"
                 focusBorderColor="teal"
                 textColor="white"
                 />
              </FormControl>
              {isEditing? (
                <Stack direction="row" spacing={5} justify="center">
                  <Button variant="solid" colorScheme="teal" onClick={handleSaveClick}>
                    Save
                  </Button>
                  <Button variant="outline" colorScheme="teal" onClick={handleCancelClick}>
                    Cancel
                  </Button>
                </Stack>
              ) : (
                <Button variant="solid" colorScheme="teal" onClick={handleEditClick}>
                  Edit
                </Button>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
    </Center>
  );
}
