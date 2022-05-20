import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import GoogleButton from "react-google-button";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await Login(email, password)
      navigate('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className="p-5 box">
        <h2 className="mb-3">Login</h2>
        {/* Error Message goes here */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Address" 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
              type="password"
              placeholder="password"
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
        />
        </div>

        <div className="p-4 box mt-3 text-center">
          Dont have an account? 
        </div>
      </div>
    </>
  )
}

export default Login