import { CircularProgress, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import FavSongContainer from '../../components/FavoritesComponent/FavSongContainer';
import { getFavorites } from '../../services/FavoritesService/FavoritesService';


function MyFavorites() {
    const [favorites, setFavorites] = useState([]);
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });
    const userid = window.localStorage.getItem("userid") ?? "1";

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFavorites(userid);
            setFavorites(data);

        };
        fetchData();
    }, [userid]);

    return (
        isMobile ?
            favorites  ?
                <Flex w="100%" backgroundColor="#000C66" minHeight="90vh" flexDirection="column" alignItems="center">
                    <Heading fontSize="2xl" fontWeight="medium" color="white" mt="24px">My favorites</Heading>
                    <Flex w="90%" flexDirection="column" mt="24px" gap="16px">
                        {
                            favorites.map((song, ind) => {
                                return <FavSongContainer key={ind} {...song} />
                            })
                        }
                    </Flex>
                </Flex>
                :
                <Flex w="100%" backgroundColor="#000C66" minHeight="90vh" flexDirection="column" alignItems="center" justifyContent="center">
                    <CircularProgress isIndeterminate color="teal" />
                </Flex>
            :
            favorites ?
                <Flex w="100%" backgroundColor="#000C66" minHeight="90vh" flexDirection="column" alignItems="center">
                    <Heading fontWeight="medium" color="white" mt="24px">My favorites</Heading>
                    <Flex w="1080px" flexDirection="column" mt="24px" gap="16px">
                        {
                            favorites?.map((song, ind) => {
                                return <FavSongContainer key={ind} {...song} />
                            })
                        }
                    </Flex>
                </Flex>
                :
                <Flex w="100%" backgroundColor="#000C66" minHeight="90vh" flexDirection="column" alignItems="center" justifyContent="center">
                    <CircularProgress isIndeterminate color="teal" />
                </Flex>
    );
}

export default MyFavorites;
