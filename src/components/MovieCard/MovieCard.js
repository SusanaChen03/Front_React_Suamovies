const MovieCard = ( ) => {





    return(
        <div className=" movieCard">
            <li className="movieName">Película: {}</li>
            <li>Año: {}</li>
            <li>Género: {} </li>
            <li>Actores: {} </li>
            <li>Precio: {} </li>
            <li>Tiempo de alquiler: {} </li>
            <li>Estado: {} </li>                  /*estado para cuando este alquilado*/
            <button>Alquilar</button>
        </div>
    )
};

export default MovieCard;