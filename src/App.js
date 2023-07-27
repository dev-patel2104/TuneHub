import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import React from 'react';
import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import Login from './pages/Authentication/Login';
import Register from './pages/Registration/Register';
import ViewProfile from './pages/UserProfile/ViewProfile';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/ContactUs/AboutUs';
import FAQ from './pages/FAQ/FAQ';
import LandingPage from './pages/LandingPage/LandingPage';
import AdminPage from './pages/Admin/Admin';
import LayoutWithNav from './pages/Layout/LayoutWithNav';
import LayoutWithoutNav from './pages/Layout/LayoutWithoutNav';
import Quiz from './pages/Trivia/quiz';
import Leaderboard from './pages/Trivia/Leaderboard';
import SpotifyContainer from './pages/SpotifyIntegration/SpotifyContainer';
import SpotifyTopSongs from './pages/SpotifyIntegration/SpotifyTopSongs';
import SpotifyArtists from './pages/SpotifyIntegration/SpotifyArtists';
import SpotifyRecentlyPlayed from './pages/SpotifyIntegration/SpotifyRecentlyPlayed';
import SongForm from './pages/Admin/SongForm';
import Search from './pages/Search/SearchSong';
import ChangePassword from './pages/Authentication/ChangePassword';
import MyFavorites from './pages/Favorites/MyFavorites';
import SongPage from './pages/Song/SongPage';

const router = createBrowserRouter([
  {
    element: <LayoutWithNav />,
    children: [
      {
        // Change this path back to the Admin page
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/faq",
        element: <FAQ />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path:"/trivia",
        element: <Quiz/>
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />
      },
      {
        path: "/user/profile",
        element: <ViewProfile />
      },
      {
        path: "/spotify",
        element: <SpotifyContainer />
      },
      {
        path: "/spotify/top-songs",
        element: <SpotifyTopSongs />
      },
      {
        path: "/spotify/top-artists",
        element: <SpotifyArtists />
      },
      {
        path: "/spotify/recently-played",
        element: <SpotifyRecentlyPlayed />
      },
      {
        path: "/admin",
        element: <AdminPage />
      },
      {
        path: "/admin/addSong",
        element: <SongForm />
      },
      {
        path: "/my-favorites",
        element: <MyFavorites />
      },
      {
        path: "/song/:songID",
        element: <SongPage />
      },
      {
        path: "/search/song",
        element : <Search/>
      },
      // {
      //   path : "/search/artist",
      //   element :<>,
      // }
    ]
  },
  {
    element: <LayoutWithoutNav />,
    children: [
      {
        path: "/user/login",
        element: <Login />
      },
      {
        path: "/user/register",
        element: <Register />
      },
      {
        path: "/user/change-password",
        element: <ChangePassword />
      },

    ]
  }

]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
