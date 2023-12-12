import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation()
  console.log('Login Location', location)
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("Successfully Login");
        setError("");
        form.reset();
        navigate(from, {replace: true})

      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setSuccess("");
      });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit} className="mt-5 w-50 mx-auto mb-5">
        <h4 className="text-center mb-5">Login your account</h4>
        <div class="mb-4">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          style={{ backgroundColor: "#403f3f" }}
        >
          Login
        </button>
        <p className="text-success text-center mt-3">{success}</p>
        <p className="text-danger text-center mt-3">{error}</p>
        <Link
          className="text-decoration-none text-danger text-center"
          to="http://localhost:5173/register"
        >
          <p className="mt-4">Dont’t Have An Account ? Register</p>
        </Link>
      </form>
    </Container>
  );
};

export default Login;
