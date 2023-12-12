import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const { signInEmail } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [accepted, setAccepted] = useState(false)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(name, email, password)

        signInEmail(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('Successfully Create Account')
            setError('')
            form.reset()
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
            setSuccess('')
        })
    }

    const handleAccept = event =>{
      setAccepted(event.target.checked)
    }

    return (
       <Container>
          <Container>
      <form onSubmit={handleSubmit} className="mt-5 w-50 mx-auto mb-5">
        <h4 className="text-center mb-5">Create Your Account</h4>
        <div class="mb-4">
          <label for="exampleInputEmail1" class="form-label">
            Email Name
          </label>
          <input
            type="text"
            name='name'
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
          />
        </div>
        <div class="mb-4">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name='email'
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
            name='password'
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
          />
        </div>
        <div>
          <input onClick={handleAccept} type="checkbox" name="checkbox" id=""  />
          <label className='ms-2 mb-4' htmlFor="">{<>Accept <Link to='/terms'>terms and conditions</Link></>}</label>
        </div>
        <button disabled={!accepted} type="submit" className="btn btn-primary w-100" style={{backgroundColor: '#403f3f'}}>
          Register
        </button>
        <p className='text-success text-center mt-3'>{success}</p>
        <p className='text-danger text-center mt-3'>{error}</p>
        <Link className="text-decoration-none text-danger text-center" to="http://localhost:5173/login"><p className="mt-4">Already Have an account ? Login</p></Link>
      </form>
    </Container>
       </Container>
    );
};

export default Register;