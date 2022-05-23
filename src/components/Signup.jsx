import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Form, Alert }from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useUserAuth } from "./UserAuthContext"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const { signUp } = useUserAuth()
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signUp(email, password) 
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className="p-4 box">
        <h2>Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        
        <Form onSubmit={handleSubmit}>
          {/* Set email address */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
              type='eamil'
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          
          {/* Set password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to='/'>Log In!</Link>
      </div>
    </>
  )
}

export default Signup