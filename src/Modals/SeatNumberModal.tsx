import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { MoviesContextI } from "../interface/movies";
import Lottie from 'react-lottie';
import animationData from '../assets/animation.json'
import { AuthContext } from "../context/AuthContext";
import { AuthContextI } from "../interface/auth";

interface SeatNumberModalI {
  isOpen: any;
  onClose: any;
}

interface selectSeatsI{
  id:number,
  content:number,
  isActive?:boolean
}

const selectSeats:selectSeatsI[] = [
  {
    id: 1,
    content: 1,

  },
  {
    id: 2,
    content: 2,

  },
  {
    id: 3,
    content: 3,
      
  },
  {
    id: 4,
    content: 4,
 
  },
  {
    id: 5,
    content: 5,
  
  },
];

export const SeatNumberModal = ({ isOpen, onClose }: SeatNumberModalI) => {
  const { handleTicketBooking, setSelectedSeat } =
    useContext<MoviesContextI>(MoviesContext);
    const {user}=useContext<AuthContextI>(AuthContext)
    const[seats,setSeats]=useState<selectSeatsI[]>(selectSeats)

const handleSeatSelect=(item:selectSeatsI)=>{
 const seats=[...selectSeats]
 const index=seats.indexOf(item)
  seats[index]={...seats[index]}
  seats[index].isActive=!seats[index].isActive
  setSeats(seats)
    setSelectedSeat(item.content);

}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};



  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
      <Lottie 
	    options={defaultOptions}
        height={150}
        width={150}
      />
        <ModalHeader textAlign="center">How many seats?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" gap={33} justifyContent="center">
            {seats.map((item) => (
              <Box
                onClick={()=>handleSeatSelect(item)}

                key={item.id}
                border="1px solid black"
                width={30}
                height={30}
                display="flex"
                alignItems="center"
                bg={item.isActive ? "green" : "white"}
                color={item.isActive ? "white" : "black"}
                justifyContent="center"
                cursor={"pointer"}
              >
                {item.content}
              </Box>
            ))}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            gap={4}
            my={4}
          >
            <Box>
              <Text>Classic</Text>
              <Text fontWeight={600} color="black">
                $12
              </Text>
              <Text color="green">Available</Text>
            </Box>
            <Box>
              <Text>Prime</Text>
              <Text fontWeight={600} color="black">
                $20
              </Text>
              <Text color="orange.400">Almost Full</Text>
            </Box>
          </Box>
          <Button
            onClick={() => {user?handleTicketBooking():alert('login to proceed')}}
            variant="solid"
            bg="#6366F1"
            color="white"
            display="grid"
            margin="auto"
          >
            Select Seats
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
