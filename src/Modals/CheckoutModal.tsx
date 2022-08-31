import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
  } from '@chakra-ui/react';
import { useContext,useState } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { MoviesContextI } from '../interface/movies';
import Lottie from 'react-lottie';
import animationData from '../assets/success.json'
import { useNavigate } from 'react-router-dom';

export const CheckoutModal=({onClose,isOpen}:any)=>{
  const navigate=useNavigate()
const {selectedSeat}=useContext<MoviesContextI>(MoviesContext);
const[showAnimation,setShowAnimation]= useState<boolean>(false)


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const handlePay=()=>{
  setShowAnimation(true)
  setTimeout(()=>{
    setShowAnimation(false)
    navigate('/')
  },3000)
}

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {showAnimation?
          <>
          <Lottie 
        options={defaultOptions}
          height={150}
          width={150}
        />
        <Text transform={'translateY(-32px)'} textAlign='center' fontWeight={500}>booking successfull</Text>
        </>
        :
        <>
        <ModalHeader>
        <Text textAlign={'center'}>Booking Summary</Text>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Number of tickets: <span style={{fontWeight:500}}>2</span></Text>
        <Text>SubTotal: <span style={{fontWeight:500}}>${selectedSeat*12}</span></Text>
        <Button bg='#6366F1'
        onClick={handlePay}
        color='white' display='block' margin='auto'
        marginBottom={4} marginTop={4} >Pay</Button>
      </ModalBody>

      </>
        }
        </ModalContent>
         
      </Modal>
    )
}