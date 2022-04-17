import "./Header.css";
import { useEffect, useState } from 'react';
import store from '../../store/store';
import { Link } from 'react-router-dom';
const Header = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
      store.subscribe(() => {
          console.log("El estado: " + store.getState().logged + "id:" + store.getState().id);

          setLogged(store.getState().logged);
      });
  }, []);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          SuaMovies
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
        
           
          {logged  && <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Alquileres
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Mis Alquileres
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Alquileres en curso
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
              </ul>
            </li>}
          </ul>
          <form class="d-flex hd">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button  class="btn btn-outline-success" type="submit">
              Search
            </button>

          </form>
          {!logged  &&  <button className="register" type="button" class="btn btn-primary">Registrate</button>}
          {!logged  && <Link to="/login"><button className="register" type="button" class="btn btn-primary Login">Login</button></Link>}
          {logged  && <Link to="/login"><button className="register" type="button" class="btn btn-primary Login">Logout</button></Link>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
