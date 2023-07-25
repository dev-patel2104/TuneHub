import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';

function Leaderboard() {
    // Sample data for the leaderboard
    const leaderboardData = [
        { rank: 1, username: 'JohnDoe', score: 1000 },
        { rank: 2, username: 'JaneSmith', score: 900 },
        { rank: 3, username: 'AlexJohnson', score: 800 },
        { rank: 4, username: 'EmilyBrown', score: 750 },
        { rank: 5, username: 'MichaelLee', score: 700 },
        // Add more leaderboard data here
    ];

    return (
        <Flex justifyContent="center" alignItems="center" minH="100vh" backgroundColor="#000C66" direction="column">
            <Text as="h1" fontSize="5xl" fontWeight="medium" color="white" mb="8">
                Leaderboard
            </Text>
            <VStack spacing="4" align="start" color="white">
                {leaderboardData.map((data) => (
                    <Flex key={data.rank} alignItems="center">
                        <Box fontSize="xl" mr="4">
                            {data.rank}.
                        </Box>
                        <Box fontWeight="medium" mr="4">
                            {data.username}
                        </Box>
                        <Text>{data.score} points</Text>
                    </Flex>
                ))}
            </VStack>
        </Flex>
    );
}

export default Leaderboard;
