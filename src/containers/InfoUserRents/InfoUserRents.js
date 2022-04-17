import './infoUserRents.css';
import { useState, useEffect } from "react";
import { URL_API } from "../../store/types";


const infoUserRents = () => {


  const [rent, setRent] = useState([]);

  const rentList = async () => {
    const rentResults = await fetch( URL_API + "/rentUser/" + sessionStorage.getItem("id"),
      {
        method: "GET",
      }
    )

    const dataRent = await rentResults.json();
      console.log("dataMovie: " + dataRent.length);
      setRent(dataRent);
  };

  useEffect(() => {
    try {
        rentList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div >
      <div className='wrapper'>
        {rent.map((oRent) =>{
          return( 
          <span> rents={oRent.idMovie}</span>);
          })}
      </div>
    </div>
  );
};

export default infoUserRents;