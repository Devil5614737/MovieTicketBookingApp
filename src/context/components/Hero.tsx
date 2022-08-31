
import { Box, Button, Image, Text } from "@chakra-ui/react"


interface HeroI{
    onOpen:any,
    title:string,
    image:string,
    duration:string,
    releaseDate:string,
    type:string
}
export const Hero=({onOpen,title,image,type,duration,releaseDate}:HeroI)=>{
   
   
    return (
       <Box className="hero"  
       p={4}
       pl={10}
       pr={10} display='flex' gap={4} >
        <Image height={400} src={image}
        alt='movie thumbnail'
        borderRadius={12}
        // w={'100%'}
        objectFit='cover'
        />
        <Box>
            <Text fontSize='4xl' fontWeight='bold'>{title}</Text>
            <Text>146mins</Text>
            <Box display={'flex'}>
                <Text fontSize='md margin' marginRight={3}>Action</Text>
                <Text fontSize='md margin' marginRight={3}>Drama</Text>
                <Text fontSize='md margin' marginRight={3}>Thriller</Text>
            </Box>
        <Text>{duration} mins</Text>
        <Text>{type}</Text>
        <Text>{releaseDate}</Text>
        <Button 
        onClick={onOpen}
        variant='solid' bg='#6366F1' my={3} color='white'>Book Tickets</Button>
        </Box>
       </Box>
    )
}