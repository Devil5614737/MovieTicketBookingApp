import { Box, Button, Image} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import {  signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { AuthContextI } from "../../interface/auth";

import { auth, provider } from "../../lib/firebase";



export const Navbar = () => {
  const { user} = useContext<AuthContextI>(AuthContext);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
.catch((error) => {
 
      const errorMessage = error.message;
     alert(errorMessage)
      // ...
    });
  };

  const handleLogout = () => {
auth.signOut()
  };



  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={4}
      pl={10}
      pr={10}
      bg="#F7F9FC"
      position={'sticky'}
      top={0}
    >
      <Box display="flex" alignItems="center">
        <Link to="/">
          <Box fontSize={18} fontWeight={500} mr={8}>
            BookTheMovie
          </Box>
        </Link>
        <Box>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        {user && (
          <Image
            marginRight={8}
            width={10}
            height={10}
            borderRadius={100}
            objectFit="cover"
            src={user.photoURL}
          />
        )}
        {user ? (
          <Button
            onClick={handleLogout}
            variant="solid"
            bg="#6366F1"
            color="white"
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={handleLogin}
            variant="solid"
            bg="#6366F1"
            color="white"
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  );
};
