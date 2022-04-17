import './InfoAdminRents.css';
import { useState, useEffect } from "react";
import { URL_API } from "../../store/types";
import AdminCard from '../../components/AdminCard/AdminCard.js';

const InfoAdminRents = () => {


  const [rents, setRents] = useState([]);

  const rentsList = async () => {
    const rentsResults = await fetch( URL_API + "/rentAdmin" ,
      {
        method: "GET",
      }
    )

    const dataRents = await rentsResults.json();
      console.log("dataRents: " + dataRents[0]._id);
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
      <div className='tableContainer info'  >
        <table class="table">
          <tr>
            <th scope="col" >Usuario</th>
            <th scope="col" >Pelicula</th>
            <th scope="col" >Genero</th>
            <th scope="col" >Horas Alquiler</th>
            <th scope="col" >Fecha Alquiler</th>
            <th scope="col" >Fecha Exp</th>
        </tr>
        {rents.map((objRent) =>{
          return <AdminCard Rent={objRent}/>
        })}
        </table>
      </div>
    </div>
  );
};

export default InfoAdminRents;