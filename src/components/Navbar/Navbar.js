import { Box, Button, Flex, HStack, Text, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { HamburgerIcon } from '@chakra-ui/icons';


function NavBar() {
  const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    isMobile ?
      <Flex as="nav" alignItems="center" justify="space-between" h="10vh" w="100%" backgroundColor="#050A30">
        {/* Logo */}
        <NavLink to="/">
          <Text fontSize="sm" color="white" ml="8px">TuneHub</Text>
        </NavLink>
        <Box>
          <IconButton
            icon={<HamburgerIcon color="white" />}
            variant="ghost"
            onClick={onOpen}
            aria-label="Open Menu"
            mr="16px"
          />

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent backgroundColor="#050A30">
              <DrawerCloseButton color="white"/>
              <DrawerHeader color="white" align="center">TuneHub</DrawerHeader>
              <DrawerBody>
                <VStack gap="12px">
                  {/* Home */}
                  <Box>
                    <NavLink to='/'>
                      <Text fontWeight="medium" color="white">Home</Text>
                    </NavLink>
                  </Box>
                  {/* Features */}
                  <Box>
                    <NavLink to='/'>
                      <Text fontWeight="medium" color="white">Features</Text>
                    </NavLink>
                  </Box>
                  {/* About Us */}
                  <Box>
                    <NavLink to='/'>
                      <Text fontWeight="medium" color="white">About Us</Text>
                    </NavLink>
                  </Box>
                  {/* News */}
                  <Box>
                    <NavLink to='/'>
                      <Text fontWeight="medium" color="white">News</Text>
                    </NavLink>
                  </Box>
                  {/* Contact */}
                  <Box>
                    <NavLink to='/'>
                      <Text fontWeight="medium" color="white">Contact</Text>
                    </NavLink>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
      :
      <Flex as="nav" alignItems="center" justify="space-between" h="10vh" w="100%" backgroundColor="#050A30">
        {/* Logo */}
        <NavLink to="/">
          <Box padding="16px 24px">
            <Text color="white">TuneHub</Text>
          </Box>
        </NavLink>

        <HStack gap="24px" mr="40px">
          {/* Home */}
          <Box>
            <NavLink to='/'>
              <Text fontWeight="medium" color="white">Home</Text>
            </NavLink>
          </Box>
          {/* Features */}
          <Box>
            <NavLink to='/'>
              <Text fontWeight="medium" color="white">Features</Text>
            </NavLink>
          </Box>
          {/* About Us */}
          <Box>
            <NavLink to='/'>
              <Text fontWeight="medium" color="white">About Us</Text>
            </NavLink>
          </Box>
          {/* News */}
          <Box>
            <NavLink to='/'>
              <Text fontWeight="medium" color="white">News</Text>
            </NavLink>
          </Box>
          {/* Contact */}
          <Box>
            <NavLink to='/'>
              <Text fontWeight="medium" color="white">Contact</Text>
            </NavLink>
          </Box>
          {/* CTA */}
          <NavLink to='/'>
            <Button fontWeight="medium" colorScheme="teal" variant="solid">Sign In/Up</Button>
          </NavLink>
        </HStack>
      </Flex>
  );
}

export default NavBar;