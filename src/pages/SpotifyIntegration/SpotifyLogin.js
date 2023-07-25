import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import SpotifyLogo from '../../assets/spotify.png';

function SpotifyLogin() {
    const LOGIN_URI = process.env.LOGIN_URI;
    console.log(LOGIN_URI);
    return (
        <Flex w="100%" minH="90vh" backgroundColor="#000C66" flexDirection="column" alignItems="center">
            <Text fontSize="4xl" fontWeight="medium" color="white" mt="24px" mb="128px">My Spotify</Text>
            <img alt="spotify" src={SpotifyLogo} />
            <Text fontSize="xl" fontWeight="medium" color="white" mt="24px">Connect with Spotify to unlock your Spotify Dashboard</Text>
            <Button variant="solid" colorScheme='teal' mt="32px">
                <a href="https://tunehub-server.onrender.com/spotify/login">Login to Spotify</a>
            </Button>
        </Flex>
    );
}

export default SpotifyLogin;