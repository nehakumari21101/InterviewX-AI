import { useNavigate, Link } from "react-router";
import "../auth.form.scss";

function Login() {

    const handlesubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
      <main>
        <div className="form-container">
          <h1>Login</h1>

          <form action="" onSubmit={handlesubmit}> 

            <div className="input-group">
              <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" placeholder="Enter email address" />
            </div>
            <div className="input-group">
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" placeholder="Enter password" />
            </div>

            <button className="button primary-button" type="submit">Login</button>

          </form>

          <p>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </div>
      </main>
    </>
  );
}

export default Login;
