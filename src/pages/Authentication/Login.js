import {
  Box,
  Button,
  Center,
  Checkbox,
  CircularProgress,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  chakra
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/Messages/ErrorMessage';

export default function Login()
{
const navigate = useNavigate();
   const CFaUserAlt = chakra(FaUserAlt);
   const CFaLock = chakra(FaLock);
   const [showPassword, setShowPassword] = useState(false);
   const handleShowClick = () => setShowPassword(!showPassword);
   // --handle submit
   const [email, setEmail] = useState('dev2104patel@gmail.com');
   const [password, setPassword] = useState('password123');
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   /*const handleSubmit = async event => {
     event.preventDefault();
     setIsLoading(true);
     try {
      // await userLogin({ email, password });
       setIsLoading(false);
       setShowPassword(false);
       navigate('/user/profile')  //, {state:{firstname:"firstname",lastname:"lastname",email:email}}
     } catch (error) {
       setError('Invalid username or password');
       setIsLoading(false);
       setEmail('');
       setPassword('');
       setShowPassword(false);
     }
   };*/
   const handleSubmit = async event => {
     event.preventDefault();
     setIsLoading(true);

     try {
       const response = await fetch('/users/login', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email, password }),
       });

       const data = await response.json();

       if (!response.ok) {
         // If the API returns an error status, set the error message accordingly.
         setError(data.message || 'Something went wrong.');
         setIsLoading(false);
         setEmail('');
         setPassword('');
         setShowPassword(false);
       } else {
         // API call successful, handle the response or redirect to the profile page.
         setIsLoading(false);
         setShowPassword(false);
         navigate('/user/profile'); // Redirect to the profile page
       }
     } catch (error) {
       setError('Error fetching user. Something went wrong.');
       setIsLoading(false);
       setEmail('');
       setPassword('');
       setShowPassword(false);
     }
   };
   const handleClick = (e) => {
       e.preventDefault();
       navigate('/user/register');
     };
   const handlePassClick = (e) => {
            e.preventDefault();
            navigate('/user/change-password');
          };

   return(
       <Center h="100vh" bg="#000C66">
          <Stack
           flexDir="column"
           mb="2"
           justifyContent="center"
           alignItems="center"
         >
        <image src="" mx="auto"></image>
       <Heading as="h1"  color="whiteAlpha.900">Login</Heading>
       <Box minW={{ base: "90%", md: "468px" }}>
         <form onSubmit={handleSubmit}>
           <Stack
             spacing={4}
             p="1rem"
             backgroundColor="whiteAlpha.900"
             boxShadow="md"
           >
             {error && <ErrorMessage message={error} />}
             <FormControl isRequired>
               <InputGroup>
                 <InputLeftElement
                   pointerEvents="none"
                   children={<CFaUserAlt color="black" />}
                 />
                 <Input
                   type="email"
                   placeholder="email address"
                   onChange={event => setEmail(event.currentTarget.value)}
                    />
               </InputGroup>
             </FormControl>
             <FormControl isRequired>
               <InputGroup>
                 <InputLeftElement
                   pointerEvents="none"
                   color="gray.300"
                   children={<CFaLock color="black" />}
                 />
                 <Input
                   type= {showPassword ? "text" : "password"}
                   placeholder="Password"
                   onChange={event => setPassword(event.currentTarget.value)}
                 />
                 <InputRightElement width="4.5rem">
                   <Button h="1.75rem" size="sm"  onClick={handleShowClick}>
                     {showPassword ? "Hide" : "Show"}
                   </Button>
                 </InputRightElement>
               </InputGroup>
               <FormHelperText textAlign="right">
               <Button variant="link"  onClick={handlePassClick}>Forgot password?</Button>
               </FormHelperText>
             </FormControl>
             <FormControl>
               <Checkbox borderColor="black">Remember Me</Checkbox>
             </FormControl>
             <Button
               borderRadius={0}
               type="submit"
               variant="solid"
               rounded="md"
               bg="#2C7A7B"
               width="full"
               >
              {isLoading? (
               <CircularProgress isIndeterminate size="24px" color="black" />
               ) : (
                 'Sign In'
               )}
             </Button>
           </Stack>
         </form>
       </Box>
       <Text as="div" textAlign="center" textColor="whiteAlpha.900">
                   <span fontColour="whiteAlpha.900">Don't have an account? </span>
                   <Button variant="link"  onClick={handleClick}>Register</Button>
       </Text>
     </Stack>
       </Center>
   )
}
