import { useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AboutMovie } from "../context/components/AboutMovie";
import { Hero } from "../context/components/Hero";
import { Navbar } from "../context/components/Navbar";
import { MoviesContext } from "../context/MoviesContext";

import { MoviesContextI } from "../interface/movies";
import { SeatNumberModal } from "../Modals/SeatNumberModal";

function MoviePreview() {
  const navigate = useNavigate();
  const { specificMovie } = useContext<MoviesContextI>(MoviesContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!specificMovie) return navigate("/");
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        onOpen={onOpen}
        image={specificMovie && specificMovie.image}
        title={specificMovie && specificMovie.title}
        duration={specificMovie && specificMovie.runtimeMins}
        releaseDate={specificMovie && specificMovie.releaseDate}
        type={specificMovie && specificMovie.contentRating}
      />
      <AboutMovie
        desc={specificMovie && specificMovie.plot}
        cast={specificMovie && specificMovie.starList}
      />
      <SeatNumberModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default MoviePreview;
