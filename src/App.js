import './App.css';
import './css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'
import Header from './components/Header/Header';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
    </div>
  );
}

export default App;
