import { Tab, TabList, Tabs } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

function SpotifySidePanel({ selectedTab }) {
    return (

        <Tabs
            index={selectedTab}
            orientation="vertical"
            backgroundColor="#050A30"
            pt="12px"
            pr="0px"
            variant="unstyled"
            w="100%"
            justifyContent="center"
        >
            <TabList gap="8px" mt="25vh">
                <NavLink to="/spotify">
                    <Tab w="100%" color="white" _selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>My Spotify</Tab>
                </NavLink>
                <NavLink to="/spotify/top-songs">
                    <Tab w="100%" color="white" _selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>Top Songs</Tab>
                </NavLink>
                <NavLink to="/spotify/top-artists">
                    <Tab w="100%" color="white" _selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>Top Artists</Tab>
                </NavLink>
                <NavLink to="/spotify/recently-played">
                    <Tab w="100%" color="white" _selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>Recently Played</Tab>
                </NavLink>
                {/* <Tab color="white" _selected={{ bg: "teal", color: "white", borderRadius: "4px" }}>Playlists</Tab> */}
            </TabList>
        </Tabs>

    );
}

export default SpotifySidePanel;