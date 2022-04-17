import { useNavigate } from "react-router-dom";
import "./RentCard.css";

const RentCard = (Rent) => {
   
 
  let imagenRent="https://assets.codepen.io/4164355/shoes.png";
  
  return (
    <div class="container">
    <div class="card">
      <div class="imgBx">
        <img  src={Rent.rent.idMovie.image} />
      </div>
      <div class="contentBx">
        <h2 class='titulo'>{Rent.rent.idMovie.name}</h2>
        <div class="size">
          <h3 >Género : {Rent.rent.idMovie.genre}</h3>
           
        </div>
        <div class="color">
          <h3>Año :{Rent.rent.idMovie.year}</h3>
          
        </div>
        <div class="color">
          <h3>rentDay :{Rent.rent.rentDay}</h3>
          
        </div>
        <div class="color">
          <h3>expiryDay :{Rent.rent.expiryDay}</h3>
          
        </div>
       
      </div>
    </div>
  </div> 
    
  );
};

export default RentCard;

/*<button type="button" class="btn btn-info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Información</font></font></button>*/