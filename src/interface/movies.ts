interface GenreList {
  key: string;
  value: string;
}

interface DirectorList {
  id: string;
  name: string;
}

interface StarList {
  id: string;
  name: string;
}

export interface MoviesI {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  releaseDate: string;
  image: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  contentRating: string;
  imDbRating: string;
  metacriticRating: 49;
  genres: string;
  genreList: GenreList[];
  directors: string;
  directorList: DirectorList[];
  stars: string;
  starList: StarList[];
}


export interface MoviesContextI{
  movies:MoviesI[],
  specificMovie:MoviesI,
  handleMoviePreview:(item:MoviesI)=>void,
  handleTicketBooking:()=>void,
  selectedSeat:number,
  setSelectedSeat:(selectedSeat:number)=>void
}