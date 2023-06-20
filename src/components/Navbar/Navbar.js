import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Text, VStack, useDisclosure, Image } from '@chakra-ui/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/tunehub.svg';


function NavBar() {
  const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    isMobile ?
      <Flex as="nav" alignItems="center" justify="space-between" h="10vh" w="100%" backgroundColor="#050A30">
        {/* Logo */}
        <NavLink to="/">
        <Image src={Logo} alt="TuneHub" width="96px" ml="16px"/>
        </NavLink>
        <Box>
          <IconButton
            icon={<HamburgerIcon color="white" boxSize="4vh"/>}
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
                    <NavLink to='/' onClick={onClose}>
                      <Text fontWeight="medium" color="white">Home</Text>
                    </NavLink>
                  </Box>
                  {/* Features */}
                  <Box>
                    <NavLink to='/' onClick={onClose}>
                      <Text fontWeight="medium" color="white" >Features</Text>
                    </NavLink>
                  </Box>
                  {/* About Us */}
                  <Box>
                    <NavLink to='/about-us' onClick={onClose}>
                      <Text fontWeight="medium" color="white">About Us</Text>
                    </NavLink>
                  </Box>
                  {/* News */}
                  <Box>
                    <NavLink to='/faq' onClick={onClose}>
                      <Text fontWeight="medium" color="white">FAQs</Text>
                    </NavLink>
                  </Box>
                  {/* Contact */}
                  <Box>
                    <NavLink to='/contact-us' onClick={onClose}>
                      <Text fontWeight="medium" color="white">Contact Us</Text>
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
            <Image src={Logo} alt="TuneHub" width="128px" ml="16px"/>
        </NavLink>
        <HStack gap="24px" mr="40px">
          {/* Home */}
          <Box>
            <NavLink to='/'>
              <Text fontWeight="medium" color="white" fontSize="lg">Home</Text>
            </NavLink>
          </Box>
          {/* Features */}
          <Box>
            <NavLink to='/'>
              <Text fontWeight="medium" color="white" fontSize="lg">Features</Text>
            </NavLink>
          </Box>
          {/* About Us */}
          <Box>
            <NavLink to='/about-us'>
              <Text fontWeight="medium" color="white" fontSize="lg">About Us</Text>
            </NavLink>
          </Box>
          {/* News */}
          <Box>
            <NavLink to='/faq'>
              <Text fontWeight="medium" color="white" fontSize="lg">FAQs</Text>
            </NavLink>
          </Box>
          {/* Contact */}
          <Box>
            <NavLink to='/contact-us'>
              <Text fontWeight="medium" color="white" fontSize="lg">Contact Us</Text>
            </NavLink>
          </Box>
          {/* CTA */}
          <NavLink to='/'>
            <Button fontWeight="medium" colorScheme="teal" variant="solid" fontSize="lg">Sign In/Up</Button>
          </NavLink>
        </HStack>
      </Flex>
  );
}

export default NavBar;