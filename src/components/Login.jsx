import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import GoogleButton from "react-google-button";
import { useUserAuth } from "./UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { logIn, googleSignIn } = useUserAuth()
  const navigate = useNavigate()

  // Both handleSubmits will direct the user to the home page once logged in
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn(email, password)
      navigate('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn()
      navigate('/home')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <div className="form-container mt-5 p-4 box bg-dark m-auto">
        <h2 className="login-text mb-3 text-white fs-1">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="login-email mb-4" controlId="formBasicEmail">
            {/* Submits email */}
            <Form.Control
              type="email"
              placeholder="Email Address" 
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* Submits password */}
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control 
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {/* Login In Button */}
          <div className="d-grid gap-2">
            <Button className="login-btn" type="submit">
              Log  In
            </Button>
          </div>
        </Form>

        <hr></hr>
        <div>
          <GoogleButton
          className="g-btn"
          type="dark"
          onClick={handleGoogleSignIn} 
        />
        </div>

        <div className="p-4 box mt-3 text-center text-white">
          Dont have an account? 
          <Link 
            className="signup-link text-decoration-none" 
            to='/signup'
          > Sign Up!</Link> 
        </div>
      </div>
    </>
  )
}

export default Login