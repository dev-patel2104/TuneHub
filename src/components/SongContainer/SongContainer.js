import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { millitoMins } from '../../spotify-integration/utils';

function SongContainer(props) {
    const { track } = props;
    return (
        <Flex w="100%" mt="32px" justifyContent="space-between">
            <Flex>
                {track.album.images.length && <img src={track.album.images[2].url} alt="Album Artwork" />}
                <Flex flexDirection="column" ml="24px" justifyContent="space-between">
                    {track.name && <Text fontSize="md" color="white" fontWeight="medium">{track.name}</Text>}
                    {track.artists && <Text fontSize="md" color="white" fontWeight="medium">{track.artists[0].name}</Text>}
                </Flex>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
                {track.duration_ms && <Text fontSize="md" color="white" fontWeight="medium">{millitoMins(track.duration_ms)}</Text>}
            </Flex>
        </Flex>
    );
}

export default SongContainer;