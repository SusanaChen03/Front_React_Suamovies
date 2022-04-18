import './AdminCard.css';

const AdminCard = (Rent) => {
  
  return (
    <tr class="container">
      <td>{Rent.Rent.idUser.name}</td>
      <td>{Rent.Rent.idMovie.name}</td>
      <td>{Rent.Rent.idMovie.genre}</td>
      <td>{Rent.Rent.idMovie.rentTime}</td>
      <td>{Rent.Rent.rentDay}</td>
      <td>{Rent.Rent.expiryDay}</td>
    </tr>
     
  );
};

export default AdminCard;

