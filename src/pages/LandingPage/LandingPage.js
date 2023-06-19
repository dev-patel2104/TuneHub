import { StarIcon } from '@chakra-ui/icons';
import { Button, Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import LandingPageSVG from '../../assets/landingpage.svg';
import { useMediaQuery } from 'react-responsive';

function LandingPage() {
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });
    return (
        isMobile ?
            <Flex w="100%" minHeight="90vh" backgroundColor="#000C66" flexDir="column" alignItems="center" justifyContent="start">
                <Flex mt="16px" w="100%" justifyContent="center">
                    <img alt="TuneHub" src={LandingPageSVG} height="40%" width="80%" />
                </Flex>
                <Flex direction="column" gap="8px" mt="64px" mb="16px">
                    <Flex alignItems="center">
                        <StarIcon boxSize="4" color="white" mr="24px" />
                        <Text fontSize="lg" fontWeight="medium" color="white">Song Recommendations</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <StarIcon boxSize="4" color="white" mr="24px" />
                        <Text fontSize="lg" fontWeight="medium" color="white">News and Updates</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <StarIcon boxSize="4" color="white" mr="24px" />
                        <Text fontSize="lg" fontWeight="medium" color="white">Spotify Integration</Text>
                    </Flex>
                </Flex>
                <Button fontSize="md" fontWeight="medium" colorScheme='teal' mt="16px" height="32px">Get Started</Button>
            </Flex>
            :
            <Flex w="100%" height="90vh" backgroundColor="#000C66" alignItems="center" justifyContent="space-evenly">
                <Flex flexDir="column" gap="12px" width="35%">
                    <Flex alignItems="center">
                        <StarIcon boxSize="8" color="white" mr="24px" />
                        <Text fontSize="4xl" fontWeight="medium" color="white">Song Recommendations</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <StarIcon boxSize="8" color="white" mr="24px" />
                        <Text fontSize="4xl" fontWeight="medium" color="white">News and Updates</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <StarIcon boxSize="8" color="white" mr="24px" />
                        <Text fontSize="4xl" fontWeight="medium" color="white">Spotify Integration</Text>
                    </Flex>
                    <Button fontSize="2xl" fontWeight="medium" colorScheme='teal' mt="16px" height="48px">Get Started</Button>
                </Flex>
                <img alt="TuneHub" src={LandingPageSVG} width="50%" />
            </Flex>
    );
}

export default LandingPage;