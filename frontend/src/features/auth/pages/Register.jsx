import { useNavigate, Link } from "react-router";

function Register() {

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <main>
        <div className="form-container">
          <h1>Register</h1>

          <form action="" onSubmit={handlesubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
              />
            </div>

            <button className="button primary-button" type="submit">
              Login
            </button>
          </form>

          <p>
            Already have an account?
            <Link to="/login"> login</Link>
          </p>

        </div>
      </main>
    </>
  );
}

export default Register;
