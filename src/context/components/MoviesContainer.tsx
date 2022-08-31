import {useContext} from 'react';
import { Box, Grid } from "@chakra-ui/react"
import { Card } from "./Card"
import { MoviesContext } from '../MoviesContext';
import { MoviesContextI } from '../../interface/movies';

export const MoviesContainer=()=>{
  const {movies}=useContext<MoviesContextI>(MoviesContext)

    return (
      <Box my={5}   
      pl={10}
      pr={10}>
        <Grid className='gridContainer' templateColumns='repeat(5, 1fr)' gap={6}>
          {movies&&movies.map(movie=>
<Card key={movie.id} title={movie.title} 
image={movie.image}
genreList={movie.genreList}
movie={movie}
/>
            )}

          
        </Grid>
      </Box>
    )
}