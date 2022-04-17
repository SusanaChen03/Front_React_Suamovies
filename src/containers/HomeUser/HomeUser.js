import './HomeUser.css';
import { useState, useEffect } from "react";
import { URL_API } from "../../store/types";
import MovieCard from '../../components/MovieCard/MovieCard.js';

const HomeUser = () => {

  const [movie, setMovie] = useState([]);

  const movieList = async () => {
    const movieResults = await fetch( URL_API + "/movies",
      {
        method: "GET",
      }
    )

    const dataMovie = await movieResults.json();
      console.log("dataMovie: " + dataMovie.length);
    setMovie(dataMovie);
  };

  useEffect(() => {
    try {
      movieList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div >
      <div className='wrapper'>
        {movie.map((movie) =>{
          return <MovieCard movie={movie}/>
        })}
      </div>
    </div>
  );
};

export default HomeUser;
