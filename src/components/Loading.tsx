import { Box } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import animationData from '../assets/loading.json'

export const Loading=()=>{

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      

    return (
        <Box display='grid' width={'100vw'} h={'100vh'}
        placeContent='center'
        >

<Lottie 
	    options={defaultOptions}
        height={150}
        width={150}
      />
        </Box>
    )
}