import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import React from 'react';
import LayoutWithNav from './pages/Layout/LayoutWithNav';
import LayoutWithoutNav from './pages/Layout/LayoutWithoutNav';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Authentication/Login';
import FAQ from './pages/FAQ/FAQ';
import ContactUs from './pages/ContactUs/ContactUs';

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
        element: <ContactUs />
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
