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
      <div className="p-5 box">
        <h2 className="mb-3">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* Submits email */}
            <Form.Control
              type="email"
              placeholder="Email Address" 
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* Submits password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
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

        <div className="p-4 box mt-3 text-center">
          Dont have an account? <Link to='/signup'>Sign Up!</Link> 
        </div>
      </div>
    </>
  )
}

export default Login