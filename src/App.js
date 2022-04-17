import './App.css';
import './css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import LoginUser from './containers/Login/Login';
import Register from './containers/Register/Register.js'
import MovieCard from './components/MovieCard/MovieCard.js'
import HomeUser from './containers/HomeUser/HomeUser';

function App() {
  console.log("hola");
  return (
    <div className="App">
         <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element={<LoginUser />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
