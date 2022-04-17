import './InfoUserRents.css';
import { useState, useEffect } from "react";
import { URL_API } from "../../store/types";


const InfoUserRents = () => {


  const [rents, setRents] = useState([]);

  const rentsList = async () => {
    const rentsResults = await fetch( URL_API + "/rentUser/" + sessionStorage.getItem("id"),
      {
        method: "GET",
      }
    )

    const dataRents = await rentsResults.json();
      console.log("dataMovie: " + dataRents.length);
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
    <div >
      <div className='wrapper'>
        {rents.map((objRent) =>{
          return( 
            <div>
          <span> rents={objRent.idMovie}</span>
            </div>
          );
         
          })}
      </div>
    </div>
  );
};

export default InfoUserRents;