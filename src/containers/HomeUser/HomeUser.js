import './HomeUser.css';
import Moviecard from '../../components/MovieCard/MovieCard.js';
import { useState, useEffect } from "react";
import images from '../../images/deadpool.jpg';
import { URL_API } from "../../store/types";
import { useNavigate } from 'react-router-dom';
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
      <div>
        {movie.map((movie) =>{
          return <MovieCard movie={movie}/>
        })}
      </div>
    </div>
  );
};

export default HomeUser;


/*<div  id="carouselExampleSlidesOnly" class="carousel slide"   data-bs-ride="carousel" >
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={images} class="d-block w-100" alt="images1" />
  </div>
  <div class="carousel-item">
    <img src={images} class="d-block w-100" alt="images2" />
  </div>
  <div class="carousel-item">
    <img src={images} class="d-block w-100" alt="images3" />
  </div>
</div>*/