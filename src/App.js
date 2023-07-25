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
import LayoutWithNav from './pages/Layout/LayoutWithNav';
import LayoutWithoutNav from './pages/Layout/LayoutWithoutNav';
import Quiz from './pages/Trivia/quiz';
import Leaderboard from './pages/Trivia/Leaderboard';
import SpotifyContainer from './pages/SpotifyIntegration/SpotifyContainer';
import SpotifyTopSongs from './pages/SpotifyIntegration/SpotifyTopSongs';
import SpotifyArtists from './pages/SpotifyIntegration/SpotifyArtists';
import SpotifyRecentlyPlayed from './pages/SpotifyIntegration/SpotifyRecentlyPlayed';
import ChangePassword from './pages/Authentication/ChangePassword';

const router = createBrowserRouter([
  {
    element: <LayoutWithNav />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/faq",
        element: <FAQ/>
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path:"/contact-us",
        element: <ContactUs/>
      },
      {
        path:"/quiz",
        element: <Quiz/>
      },
      {
        path:"/leaderboard",
        element: <Leaderboard/>
      },
       {
        path:"/user/profile",
        element: <ViewProfile/>
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
      }
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
