import './App.css';
import './css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'
import Header from './components/Header/Header';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register.js'
import MovieCard from './components/MovieCard/MovieCard.js'
import HomeUser from './containers/HomeUser/HomeUser';

function App() {
  return (
    <div className="App">
    <HomeUser></HomeUser>
    </div>
  );
}

export default App;
