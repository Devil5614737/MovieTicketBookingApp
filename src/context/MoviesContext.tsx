import { createContext, useState, ReactNode, useEffect } from "react";
import { MoviesContextI, MoviesI } from "../interface/movies";
import Data from "../data/data.json";
import { useNavigate } from "react-router-dom";


export const MoviesContext = createContext({} as MoviesContextI);

interface MoviesContextProviderI {
  children: ReactNode;
}

export const MoviesContextProvider = ({ children }: MoviesContextProviderI) => {
  const navigate=useNavigate()
  const [movies, setMovies] = useState<MoviesI[]>
  (Data);
  const [specificMovie, setSpecificMovie] = useState<MoviesI|any>();
  const[selectedSeat,setSelectedSeat]=useState<number>(0)




const handleMoviePreview=(item:MoviesI)=>{
  setSpecificMovie(item)
  navigate('/movie-preview')

}

const handleTicketBooking=()=>{
  navigate('select-seat');

}




  return (
    <MoviesContext.Provider value={{ movies, specificMovie,handleMoviePreview,
      handleTicketBooking,
      selectedSeat,setSelectedSeat,
    }}>
      {children}
    </MoviesContext.Provider>
  );
};
