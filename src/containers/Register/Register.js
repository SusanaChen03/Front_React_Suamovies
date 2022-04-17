import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {actionCreator} from "../../store/actionTypes.js";
import { HIDDEN_POPUP, SHOW_POPUP, URL_API } from "../../store/types";

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    
    e.preventDefault();
    console.log(e.target[0].value + "target");
    try {
      const formData = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        avatar:"",
        points: 0
       
    };
    console.log("formData:" + formData.name);
      let registerUser = await fetch( URL_API + "/user",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await registerUser.json();
      console.log("data:" + data);
      if(data === "wrong"){
        dispatch( actionCreator(SHOW_POPUP, "No se a podido crear usuario"));
    
        setTimeout(() => dispatch(actionCreator(HIDDEN_POPUP)), 2000);

      }else if(data === "wrongexist"){
       alert("El email ya está registrado.");
      } 
      else {
        dispatch( actionCreator(SHOW_POPUP, "Se a creado satisfactoriamente"));
    
        setTimeout(() => dispatch(actionCreator(HIDDEN_POPUP)), 2000);

        navigate("/")
      }


    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register" class="register">
      <form class="containerRegister"   onSubmit={(e) => formSubmit(e)}>
    
          <h1>REGISTRO</h1>

          <div class="mb-3">
            <label for="textInput" class="form-label">Nombre</label>
            <input type="text" id="name" class="form-control"  placeholder="Introduce tu nombre"  />
          </div>

          <div class="mb-3">
            <label for="textInput" class="form-label">E-mail</label>
            <input type="email" id="email" class="form-control"  placeholder="Introduce tu correo favorito"  />
          </div>

          <div class="mb-3">
            <label for="textInput" class="form-label">Contraseña</label>
            <input type="password" id="password" class="form-control"  placeholder="Introduce una contraseña"  />
          </div>

          <p className="conditions">
      Al crear la cuenta, aceptas los Términos y Condiciones, la Política de protección de datos y la Política de cookies. 
      Suamovies va a tratar tus datos para poder prestarte sus servicios.
      </p>
      <button type="submit" class="btn btn-primary"> Crear Cuenta </button>
      </form>
    </div>
  );
};

export default Register;
