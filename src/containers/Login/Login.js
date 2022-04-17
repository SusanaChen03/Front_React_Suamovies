import './Login.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {actionCreator} from "../../store/actionTypes.js";
import { useEffect, useState } from 'react';
import store from '../../store/store';
import { HIDDEN_POPUP, USER_LOGGED, SHOW_POPUP, URL_API, USER_LOGOUT } from "../../store/types";


const LoginUser = () => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    store.subscribe(() => {
        console.log("El estado: " + store.getState().login + "id:" + store.getState().id);

        setLogged(store.getState().login);
    });
}, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    console.log(e.target[0].value + "target");
    try {
      const formData = {
        email: e.target[0].value,
        password: e.target[1].value
       
    };
      let loginUser = await fetch(
        URL_API + "/login",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      loginUser = await loginUser.json();
        console.log(loginUser + "hola user");
      if (loginUser != "User no founded") {
        localStorage.setItem("token", loginUser.userToken);
        localStorage.setItem("id", loginUser.idUser);
        localStorage.setItem("rol", loginUser.role);
        localStorage.setItem("name", loginUser.name);
       if (localStorage.getItem("rol") === "admin") {
          dispatch(actionCreator(USER_LOGGED));
          dispatch(
            actionCreator(SHOW_POPUP, "Te has logeado correctamente. Bienvenido")
          );
          setTimeout(() => dispatch(actionCreator(HIDDEN_POPUP)), 2000);
          navigate("/HomeUser");
        } else {
          dispatch(actionCreator(USER_LOGGED));
          dispatch(
            actionCreator(SHOW_POPUP, "Te has logeado correctamente. Bienvenido")
          );
          setTimeout(() => dispatch(actionCreator(HIDDEN_POPUP)), 2000);
          navigate("/HomeUser");
        }
      } else {
        alert("Usuario y/o contraseña incorrecto.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
   <form  onSubmit={(e) => formSubmit(e)}>
      <div div class="form-group containerLogin" >
        <h1>Entra en tu cuenta</h1>

        <label for="exampleInputEmail1" class="form-label mt-4"> Email</label>
        <input type="email"  class="form-control"  id="email"  aria-describedby="emailHelp" placeholder="Enter email"  />
        <small id="emailHelp" class="form-text text-muted">  We'll never share your email with anyone else. </small>
      </div>

      <div div class="form-group containerLogin">
        <label for="exampleInputPassword1" class="form-label mt-4">Password  </label>
        <input type="password"  class="form-control"  id="password" placeholder="Password"  />
      </div>
      <div div class="form-group containerLogin buttonSubmit">
      <button type="submit" class="btn btn-primary"> Login </button>
      </div>
      </form>
    </div>
  );
};

export default LoginUser;
