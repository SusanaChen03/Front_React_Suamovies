import "./Register.css";

const Register = () => {
  return (
    <div>
      <form>
        <fieldset disabled>
          <legend>Registro</legend>

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
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input"  type="checkbox"  id="disabledFieldsetCheck"  disabled />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">  Submit  </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
