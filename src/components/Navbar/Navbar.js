import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Flex as="nav" alignItems="center" justify="space-between">
      {/* Logo */}
      <NavLink to="/">
        <Box padding="16px 24px">
          <Text>TuneHub</Text>
        </Box>
      </NavLink>

      <HStack>
        {/* Header */}
        <Box padding="16px 24px">
          <NavLink to='/'>
            <Text fontWeight="medium">Navbar</Text>
          </NavLink>
        </Box>
        {/* Account avatar */}
        <Box padding="16px 24px">
          <Text>Profile</Text>
        </Box>
      </HStack>
    </Flex>
  );
}

export default NavBar;