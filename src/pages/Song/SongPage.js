import { CircularProgress, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { getSong } from '../../services/SongService/SongService';
import image1 from '../../assets/headphone.png';
import { isFavorite, addToFavorites, deleteFromFavorites } from '../../services/FavoritesService/FavoritesService';
import { useMediaQuery } from 'react-responsive';


function SongPage() {
    // const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });
    const userid = window.localStorage.getItem("userid") ?? "1";
    const [song, setSong] = useState(null);
    const { songID } = useParams();
    const [isFav, setIsFav] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });


    useEffect(() => {
        const fetchData = async () => {
            const data = await getSong(songID);
            const dataRes = await isFavorite(userid, songID);
            setIsFav(dataRes.isFav);
            setSong(data);

        };
        fetchData();
    }, [songID, userid]);

    const removeFromFavorites = async () => {
        await deleteFromFavorites(userid, songID);
        const dataRes = await isFavorite(userid, songID);
        setIsFav(dataRes.isFav);
    }

    const addFavorite = async () => {
        await addToFavorites(userid, songID);
        const dataRes = await isFavorite(userid, songID);

        setIsFav(dataRes.isFav);
    }

    return (
        isMobile ?

            song ?
                <Flex w="100%" backgroundColor="#000C66" minHeight="90vh" flexDirection="column" alignItems="center">

                    {/* Photo */}
                    <Flex minH="30vh" flexDirection="column" minW="30vh" maxH="30vh" maxW="30vh" mt="5vh">
                        <Image src={song.image ?? image1} alt="Song Image" maxHeight="40vh" w="30vh" objectFit="cover" />
                    </Flex>
                    {/* Song details */}

                    <Heading color="white" mt="16px">{song.name}</Heading>
                    <Text fontWeight="medium" fontSize="2xl" color="white" mt="20px">
                        {song.artist?.map((item) => (
                            item + " "
                        ))}
                    </Text>
                    <Text fontSize="lg" fontWeight="medium" color="white" mt="32px">Genres: </Text>
                    <Text fontWeight="medium" color="white" mt="4px">
                        {song.genres?.map((item) => (
                            item + " "
                        ))}
                    </Text>
                    <Text fontWeight="medium" color="white" mt="20px">Duration {song.duration}</Text>


                    <Flex mt="32px">

                        {isFav === "true" ? <Button onClick={removeFromFavorites} variant="solid" colorScheme="teal">Remove from Favorites</Button> : <Button onClick={addFavorite} variant="solid" colorScheme="teal">Add to Favorites</Button>}
                    </Flex>
                </Flex>
                :
                <Flex w="100%" backgroundColor="#000C66" minHeight="90vh" flexDirection="column" alignItems="center" justifyContent="center">
                    <CircularProgress isIndeterminate color="teal" />
                </Flex>
            : song ?
                <Flex w="100%" backgroundColor="#000C66" minHeight="90vh" flexDirection="column" alignItems="center">
                    <Flex mt="64px">
                        {/* Photo */}
                        <Flex minH="30vh" minW="30vh" maxH="30vh" maxW="30vh">
                            <Image src={song.image ?? image1} alt="Song Image" maxHeight="40vh" w="30vh" objectFit="cover" />
                        </Flex>
                        {/* Song details */}
                        <Flex minH="30vh" flexDirection="column" justifyContent="end" ml="32px">
                            <Heading color="white">{song.name}</Heading>
                            <Text fontWeight="medium" color="white">
                                {song.artist?.map((item) => (
                                    item + " "
                                ))}
                            </Text>
                            <Text fontSize="lg" fontWeight="medium" color="white">Genres: </Text>
                            <Text fontWeight="medium" color="white">
                                {song.genres?.map((item) => (
                                    item + " "
                                ))}
                            </Text>
                            <Text fontWeight="medium" color="white">Duration {song.duration}</Text>
                        </Flex>
                    </Flex>
                    <Flex mt="32px">

                        {isFav === "true" ? <Button onClick={removeFromFavorites} variant="solid" colorScheme="teal">Remove from Favorites</Button> : <Button onClick={addFavorite} variant="solid" colorScheme="teal">Add to Favorites</Button>}
                    </Flex>
                </Flex>
                :
                <Flex w="100%" backgroundColor="#000C66" minHeight="90vh" flexDirection="column" alignItems="center" justifyContent="center">
                    <CircularProgress isIndeterminate color="teal" />
                </Flex>
    );


}

export default SongPage;
