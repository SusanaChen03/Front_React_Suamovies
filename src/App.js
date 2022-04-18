import './App.css';
import './css/bootstrap.min.css';
import boots from 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.js';
import LoginUser from './containers/Login/Login.js';
import Register from './containers/Register/Register.js'
import HomeUser from './containers/HomeUser/HomeUser.js';
import RentMovies from './containers/RentMovies/RentMovies.js';
import InfoUserRents from './containers/InfoUserRents/InfoUserRents.js';
import InfoUserRentsActive from './containers/InfoUserRents/InfoUserRentsActive.js';
import InfoAdminRents from './containers/InfoAdminRents/InfoAdminRents.js';

function App() {
  //console.log("hola");
  return (
    <div className="App">
         <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<LoginUser />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home/:id' element={<HomeUser />} />
          <Route path='/home' element={<HomeUser />} />
          <Route path='/rentMovies' element={<RentMovies />}/>
          <Route path='/infoUserRents' element={<InfoUserRents/>}/>
          <Route path='/infoUserRents/active' element={<InfoUserRentsActive/>}/>
          <Route path='/Admin/rents' element={<InfoAdminRents/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
