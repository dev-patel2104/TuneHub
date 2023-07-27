import {
    Button,
    Flex,
    FormControl,
    Heading,
    Input,
    Menu, MenuButton,
    MenuItem,
    MenuList,
    VStack
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SongCardUser from '../../components/SongComponents/SongCardUser';
import { getAllGenres, getAllSongs } from '../../services/SearchServices/SearchServices';

function LoadList({ songList, changedData, isMobile }) {
    let flag = true;
    if (changedData.length === songList.length) {
        flag = false;
    }
    if (changedData.length === 0) {
        return (
            <Heading color="white" mt="100px"> No such song exist </Heading>
        )
    }

    return (
        isMobile ?
            <VStack spacing="36px" mt="72px" alignItems="stretch" width="90%">
                {flag
                    ? changedData.map((song) => (
                        <SongCardUser key={song.id} {...song} />
                    ))
                    : songList.map((song) => (
                        <SongCardUser key={song.id} {...song} />
                    ))}
            </VStack>
            :
            <VStack spacing="36px" mt="72px" alignItems="stretch" width="100%">
                {flag
                    ? changedData.map((song) => (
                        <SongCardUser key={song.id} {...song} />
                    ))
                    : songList.map((song) => (
                        <SongCardUser key={song.id} {...song} />
                    ))}
            </VStack>
    );
}

function SongPage() {

    const [songList, setSongList] = useState([]);
    const [changedData, setChangedData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [filteredData, setFilteredData] = useState('');
    const [genreList, setGenreList] = useState([]);
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });

    const getSongList = async () => {
        const allSongs = await getAllSongs();
        //console.log(allSongs);
        setSongList(allSongs);
        setChangedData(allSongs);
    }
    const getGenreList = async () => {
        const allGenres = await getAllGenres();
        console.log(allGenres);
        const genreListWithNone = [{ id: 0, name: 'None' }, ...allGenres];
        setGenreList(genreListWithNone);
    }

    const searchHandler = (e) => {
        console.log(e.target.value);
        const inputVal = e.target.value.toLowerCase();
        setSearchVal(inputVal);

        if (selectedGenre === undefined || selectedGenre === null || selectedGenre === '') {
            const searchResult = filteredData.filter((item) => {

                const nameWords = item.name.toLowerCase().split(" ");

                return nameWords.some((word) => word.includes(inputVal)) || item.name.toLowerCase().includes(inputVal);
            });
            setChangedData(searchResult);

        }
        else {
            const searchResult = filteredData.filter((item) => {

                const nameWords = item.name.toLowerCase().split(" ");

                return nameWords.some((word) => word.includes(inputVal)) || item.name.toLowerCase().includes(inputVal);
            });
            setChangedData(searchResult);
        }

    };

    const handleGenreChange = (genre) => {
        const genreName = genre.name.toLowerCase();
        if (genreName === 'none') {
            setChangedData(songList); // If no genre is selected, show all songs
            setSelectedGenre('');
            setFilteredData(songList);
        }
        else if (genre) {
            const filteredSongs = songList.filter((song) =>
                song.genres.some((item) => item.toLowerCase().includes(genreName)) // Filter songs by genre name
            );
            setChangedData(filteredSongs);
            setFilteredData(filteredSongs);
            setSelectedGenre(genre);
        }
        else {
            setChangedData([]); // If no genre is selected, show all songs
        }
    };

    useEffect(() => {
        // Fetch data from the API on https://tunehub-server.onrender.com
        getSongList();
        getGenreList();
        setFilteredData(songList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        isMobile ?
            <Flex backgroundColor="#000C66" minH="90vh" overflow="hidden" width="100%" alignItems="center" flexDirection="column" >
                <Flex borderColor="gray.500" mt="60px" width="80%" gap="20px" flexDirection="row" >
                    <Input width="100%"
                        color="white"
                        placeholder="Search for song"
                        size="md"
                        borderColor="teal.100"
                        focusBorderColor="white"
                        value={searchVal}
                        onChange={searchHandler}

                    />
                    <FormControl width="auto" >
                        <Menu>
                            <MenuButton as={Button} colorScheme="teal" color="white">
                                {selectedGenre ? selectedGenre.name : 'Select genre'}
                            </MenuButton>
                            <MenuList bg="#000C66" borderColor="gray.500">
                                {/* Add options for each genre */}
                                {genreList.map((genre) => (
                                    <MenuItem bg="#000C66" _hover={{ bg: '#050A30', color: 'white' }}
                                        _focus={{ bg: '#050A30', color: 'white' }}
                                        _active={{ bg: '#050A30', color: 'white' }} color="white" key={genre.id} onClick={() => handleGenreChange(genre)}>
                                        {genre.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </FormControl>
                </Flex>

                <Flex width="100%" justifyContent="center" mt="20px">
                    <LoadList songList={songList} changedData={changedData} isMobile={true} />
                </Flex>
            </Flex>
            :
            <Flex backgroundColor="#000C66" minH="90vh" width="100%" alignItems="center" flexDirection="column" >
                <Flex borderColor="gray.500" mt="60px" width="1080px" gap="20px" flexDirection="row">
                    <Input width="100%"
                        color="white"
                        placeholder="Search for song"
                        size="md"
                        ml="20px"
                        borderColor="teal.100"
                        focusBorderColor="white"
                        value={searchVal}
                        onChange={searchHandler}
                    />
                    <FormControl width="15%" >
                        <Menu>
                            <MenuButton as={Button} colorScheme="teal" color="white">
                                {selectedGenre ? selectedGenre.name : 'Select genre'}
                            </MenuButton>
                            <MenuList bg="#000C66" borderColor="gray.500">
                                {/* Add options for each genre */}
                                {genreList.map((genre) => (
                                    <MenuItem bg="#000C66" _hover={{ bg: '#050A30', color: 'white' }}
                                        _focus={{ bg: '#050A30', color: 'white' }}
                                        _active={{ bg: '#050A30', color: 'white' }} color="white" key={genre.id} onClick={() => handleGenreChange(genre)}>
                                        {genre.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </FormControl>
                </Flex>

                <Flex width="1070px" justifyContent="center">
                    <LoadList songList={songList} changedData={changedData} isMobile={false} />
                </Flex>
            </Flex>
    );
}

export default SongPage;
