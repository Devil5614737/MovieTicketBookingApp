import { Box, Image,Text } from "@chakra-ui/react"
import { useContext } from "react";
import { MoviesContext } from "../MoviesContext";
import { MoviesContextI, MoviesI } from "../../interface/movies";


interface GenreList {
  key: string;
  value: string;
}


interface CardI{
  title:string,
  image:string,
  genreList:GenreList[],
  movie:MoviesI
}



export const Card=({title,image,genreList,movie}:CardI)=>{
  const {handleMoviePreview}=useContext<MoviesContextI>(MoviesContext)
  const ImageLink=`https://imdb-api.com/API/ResizeImage?apikey=k_tswo3sim&size=300x500&url=${image}`



    return (
        <Box cursor='pointer' bg="#F7F9FC" borderRadius={7}>
          <Image
          onClick={()=>handleMoviePreview(movie)}
          w={"100%"}
          h={350}
          src={image||ImageLink}
          objectFit='cover'
          alt='movie poster'
          />
        <Box p={2} pb={4}>
        <Text fontSize='xl' fontWeight={500}  mb={2}>{title}</Text>
         <Box display='flex' alignItems='center'>
          {genreList.map(genre=>
            <Text key={genre.key} mr={3}>{genre.value}</Text>
            
            )}
         </Box>
        </Box>
        </Box>
    )
}