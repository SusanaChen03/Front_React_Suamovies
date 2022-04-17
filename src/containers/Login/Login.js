import './Login.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {actionCreator} from "../../store/actionTypes.js";
import { HIDDEN_POPUP, USER_LOGGED, SHOW_POPUP, URL_API } from "../../store/types";
//component popup

const LoginUser = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    
    e.preventDefault();

    console.log(e.target[0].value + "target");
    try {
      const formData = {
        email: e.target[0].value,
        password: e.target[1].value
    };
      let loginUser = await fetch( URL_API + "/login",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await loginUser.json();
      console.log("loginUser:"+data);
      if (loginUser != "User no founded") {
        sessionStorage.setItem("token", data.userToken);
        sessionStorage.setItem("id", data.idUser);
        sessionStorage.setItem("rol", data.role);
        sessionStorage.setItem("name", data.name);
        sessionStorage.setItem("logged",true);


       if (sessionStorage.getItem("rol") === "admin") {
          dispatch( actionCreator(USER_LOGGED, { token: data.userToken, id: data.idUser, name:data.name, role:data.role }));
          dispatch( actionCreator(SHOW_POPUP, "Se a iniciado correctamente. Bienvenid@ Admin"));
    
          setTimeout(() => dispatch(actionCreator(HIDDEN_POPUP)), 2000);
          navigate("/home");

        } else {
          dispatch(actionCreator(USER_LOGGED, { token: data.userToken, id: data.idUser, name:data.name, role:data.role }));
          dispatch(actionCreator(SHOW_POPUP, "Se a iniciado correctamente. Bienvenido" + {name: data.name}));
            console.log("Se a iniciado correctamente. Bienvenido" + {name: data.name});
          setTimeout(() => dispatch(actionCreator(HIDDEN_POPUP)), 2000);
         navigate("/home");
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

        <label for="exampleInputEmail1" class="form-label mt-4">Email</label>
        <input type="email"  class="form-control"  id="email"  aria-describedby="emailHelp" placeholder="Introduce tu email"  />
        <small className="sharemail" id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email a terceros </small>
      </div>

      <div div class="form-group containerLogin">
        <label for="exampleInputPassword1" class="form-label mt-4">Contraseña</label>
        <input type="password"  class="form-control"  id="password" placeholder="Introduce tu contraseña"  />
      </div>
      <div div class="form-group containerLogin buttonSubmit">
      <button type="submit" class="btn btn-primary"> Login </button>
      </div>
      </form>
    </div>
  );
};

export default LoginUser;
