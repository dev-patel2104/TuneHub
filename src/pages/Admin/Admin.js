import {
    Flex,
    VStack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import LeftSidePanel from '../../components/AdminComponent/AdminSidePanel.js';
import SongOverviewBox from '../../components/SongComponents/SongCardAdmin.js';
import { getAllSongs } from '../../services/AdminServices/AdminServices';
import { useMediaQuery } from 'react-responsive';

function LoadList({ songList, getSongList }) {

    return (
        <VStack spacing="30px" mt="30px" alignItems="stretch" width="100%">
            {songList?.map((song) => (
                <SongOverviewBox key={song.id} {...song} LoadList={LoadList} songList={songList} getSongList={getSongList} />
            ))}
        </VStack>
    );
}

function AdminPage() {
    // No initial value is given so will automatically take the first index
    const [songList, setSongList] = useState([]);
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });

    const tabIndex = 0;

    const getSongList = async () => {
        const allSongs = await getAllSongs();
        console.log(allSongs);
        setSongList(allSongs);
    }

    useEffect(() => {
        // Fetch data from the API on https://tunehub-server.onrender.com
        getSongList();
    }, []);

    return (
        isMobile ?
        <Flex p={0} backgroundColor="#000C66" minW="100vw" minH = "90vh" direction = "column"> {/* Set padding to 0 and overflow to hidden */}
            <Flex >
                <LeftSidePanel selectedTab={tabIndex} />
            </Flex>
            <Flex ml="50px" mr="50px" flex="1"  position="relative" justifyContent="center" > {/* Use ml (margin-left) to create space for the tab */}
                <LoadList songList={songList} getSongList={getSongList} />
            </Flex>
        </Flex>
        :
        <Flex p={0} backgroundColor="#000C66" minH="90vh" > {/* Set padding to 0 and overflow to hidden */}
            <Flex minH="100vh" >
                <LeftSidePanel selectedTab={tabIndex} />
            </Flex>
            <Flex ml="50px" mr="50px" flex="1" justifyContent="center" > {/* Use ml (margin-left) to create space for the tab */}
                <LoadList songList={songList} getSongList={getSongList} />
            </Flex>
        </Flex>
    );
}



export default AdminPage;