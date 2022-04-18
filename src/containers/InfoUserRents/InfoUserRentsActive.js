import './InfoUserRents.css';
import { useState, useEffect } from "react";
import { URL_API } from "../../store/types.js";
import RentCard from '../../components/RentCard/RentCard.js';

const InfoUserRentsActive = () => {


  const [rents, setRents] = useState([]);

  const rentsList = async () => {
    const rentsResults = await fetch( URL_API + "/rentActive/" + sessionStorage.getItem("id"),
      {
        method: "GET",
      }
    )

    const dataRents = await rentsResults.json();
      console.log("dataRents: " + dataRents[0].idUser);
      setRents(dataRents);
  };

  useEffect(() => {
    try {
        rentsList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='userRent'>
         <div className='wrapper'>
        {rents.map((objRent) =>{
          return <RentCard rent={objRent}/>
        })}
      </div>
    </div>
  );
};

export default InfoUserRentsActive;