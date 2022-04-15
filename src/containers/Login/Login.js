import './Login.css';


const Login = () => {
  return (
    <div>
      <div div class="form-group">
        <h1>Entra en tu cuenta</h1>

        <label for="exampleInputEmail1" class="form-label mt-4"> Email address</label>
        <input className="inputbutton" type="email"  class="form-control"  id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Enter email"  />
        <small id="emailHelp" class="form-text text-muted">  We'll never share your email with anyone else. </small>
      </div>

      <div div class="form-group">
        <label for="exampleInputPassword1" class="form-label mt-4">Password  </label>
        <input className="inputbutton" type="password"  class="form-control"  id="exampleInputPassword1" placeholder="Password"  />
      </div>
    </div>
  );
};

export default Login;
