import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = (movie) => {
  console.log("movie: "+ movie.movie.year);
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate('/rentMovies', { state: movie });
}
  return (
    <div className="movieCard">
      <img src="..." class="card-img-top" alt="..." />

      <h5 class="card-title">{movie.movie.name}</h5>
      <li>Año: {movie.movie.year}</li>
      <li>Género: {movie.movie.genre} </li>
      <li>Actores: {movie.movie.actor} </li>
      <li>Precio: {movie.movie.price} </li>
      <li>Tiempo de alquiler: {movie.movie.rentTime} </li>
      <li>Estado: {movie.movie.state} </li>
      <button onClick={buttonHandler} type="submit" class="btn btn-primary"> Alquilar </button>
    </div>
  );
};

export default MovieCard;

/*<button type="button" class="btn btn-info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Información</font></font></button>*/