import './HomeUser.css';
import { useState, useEffect } from "react";
import { URL_API } from "../../store/types";
import MovieCard from '../../components/MovieCard/MovieCard.js';
import { useSearchParams } from "react-router-dom";
import { useParams,useLocation  } from "react-router-dom";
const HomeUser = () => {

  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const location = useLocation();
  const movieList = async () => {
     
    
    let urlEndPoint=URL_API + "/movies";
    let SubURL=    "?";
    if(id!=null)
    {
      SubURL=SubURL+"genre="+id+"&";
    }
    if(id!=null)
    {
      SubURL=SubURL+"name="+id+"&";
    }
    if(id!=null)
    {
      SubURL=SubURL+"actor="+id+"&";
    }
    urlEndPoint=urlEndPoint+SubURL;
    console.log("urlEndPoint: " +   urlEndPoint);
    const movieResults = await fetch( urlEndPoint,
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
      
     ;
      movieList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='home'>
      <div className='wrapper'>
        {movie.map((movie) =>{
          return <MovieCard movie={movie}/>
        })}
      </div>
    </div>
  );
};

export default HomeUser;
