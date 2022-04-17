import './RentMovies.css';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { URL_API } from "../../store/types";


const RentMovies = () =>{
   const navigate = useNavigate();
    const location = useLocation();
let imagenMovie="https://assets.codepen.io/4164355/shoes.png";
    const [movies, setMovie] = useState([]);

    const buttonHandler = async () => {
        try {
            const formData = {
              idUser: sessionStorage.getItem("id"),
              idMovie: movies._id
          };

            let newRent = await fetch( URL_API + "/rent",
              {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
      
            const data = await newRent.json();
            if(data === "error"){
                alert("no se pudo alquilar la pelicula")
            }else{
                alert("la pelicula se ha alquilado correctamente")
                navigate('/home');
            }
        }
        catch (error) {
            console.log(error);
          }
        };



    useEffect(() => {
        try {
            console.log("estado:" + location.state.movie._id);
          setMovie( location.state.movie);
        } catch (error) {
            console.log(error)
        }
    }, []);


    return(
        
        <div class="allbody">
    <div class="scontainer">
  <div class="card">
    <div class="imgBx">
      <img  src={imagenMovie} />
    </div>
    <div class="contentBx">
      <h2>{movies.name}</h2>
      <div class="size">
        <h3>Género : {movies.genre}</h3>
         
      </div>
      <div class="color">
        <h3>Año :{movies.year}</h3>
        
      </div>
      <a href="#" onClick={buttonHandler}>Alquilar</a>
    </div>
  </div>
</div> 
</div> 
         
    )
};

export default RentMovies;