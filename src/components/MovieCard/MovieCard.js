import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = (movie) => {
  console.log("movie: "+ movie.movie.year);
  const navigate = useNavigate();
  let imagenMovie="https://icon-library.com/images/movies-icon/movies-icon-6.jpg";

  const buttonHandler = () => {
    navigate('/rentMovies', { state: movie });
};

  return (
    <div class="container">
    <div class="card">
      <div class="imgBx">
        <img  src={movie.movie.image} />
      </div>
      <div class="contentBx">
        <h2 class='titulo'>{movie.movie.name}</h2>
        <div class="size">
          <h3 >Género : {movie.movie.genre}</h3>
        </div>
        <div class="color">
          <h3>Año :{movie.movie.year}</h3>
        </div>
        <a href="#" onClick={buttonHandler}>Seleccionar</a>
      </div>
    </div>
  </div> 
    
  );
};

export default MovieCard;

