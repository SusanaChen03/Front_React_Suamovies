import "./MovieCard.css";

const MovieCard = (movie) => {
  return (
    <div className="movieCard">
      <img src="..." class="card-img-top" alt="..." />

      <h5 class="card-title">Movie name {movie.name}</h5>
      <li>Año: {movie.year}</li>
      <li>Género: {movie.genre} </li>
      <li>Actores: {movie.actor} </li>
      <li>Precio: {movie.price} </li>
      <li>Tiempo de alquiler: {movie.rentTime} </li>
      <li>Estado: {movie.state} </li>
      <a href="#" class="btn btn-primary">Alquilar </a>
    </div>
  );
};

export default MovieCard;

/*<button type="button" class="btn btn-info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Información</font></font></button>*/