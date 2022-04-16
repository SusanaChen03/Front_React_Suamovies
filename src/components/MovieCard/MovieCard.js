import "./MovieCard.css";

const MovieCard = () => {
  return (
    <div className="movieCard">
      <img src="..." class="card-img-top" alt="..." />

      <h5 class="card-title">Movie name {}</h5>
      <li>Año: {}</li>
      <li>Género: {} </li>
      <li>Actores: {} </li>
      <li>Precio: {} </li>
      <li>Tiempo de alquiler: {} </li>
      <li>Estado: {} </li>
      <a href="#" class="btn btn-primary">Alquilar </a>
    </div>
  );
};

export default MovieCard;

/*<button type="button" class="btn btn-info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Información</font></font></button>*/