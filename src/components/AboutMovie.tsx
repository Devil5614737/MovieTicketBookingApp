
import { Box, Text } from "@chakra-ui/react"

interface Cast {
    id: string;
    name: string;
  }


interface AboutMovieI{
    desc:string,
    cast:Cast[]
}

export const AboutMovie=({desc,cast}:AboutMovieI)=>{

    return (
        <Box   p={4}
        pl={10}
        pr={10}>
            <Text fontSize={22} fontWeight={500}>About Movie</Text>
            <Text my={3} fontSize={18}>{desc}</Text>
            <Box display='flex' className='cast' gap={4}>
                <Text >Cast :</Text>
                {cast&&cast.map(item=>
                <Text key={item.id} fontWeight={500}>{item.name}</Text>
                    )}
              
            </Box>
        </Box>
    )
}