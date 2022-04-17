import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <form className="containerRegister">
        <fieldset>
          <h1>Registro</h1>

          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">Nombre</label>
            <input type="text" id="text" class="form-control"  placeholder="Disabled input"  />
          </div>

          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">E-mail</label>
            <input type="email" id="email" class="form-control"  placeholder="Disabled input"  />
          </div>

          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">Contraseña</label>
            <input type="password" id="password" class="form-control"  placeholder="Disabled input"  />
          </div>

          <div class="mb-3">
            <label for="Select" class="form-label">Disabled select menu </label>
              
            <select id="disabledSelect" class="form-select">
              <option>Disabled select</option>
            </select>
          </div>
        </fieldset>
      </form>
      <p className="conditions">
      Al crear la cuenta, aceptas los Términos y Condiciones, la Política de protección de datos y la Política de cookies. 
      Suamovies va a tratar tus datos para poder prestarte sus servicios.
      </p>
      <button type="submit" class="btn btn-primary">Crear Cuenta </button>
    </div>
  );
};

export default Register;
