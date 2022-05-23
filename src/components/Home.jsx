import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from './UserAuthContext'

const Home = () => {
  const { logOut, user } = useUserAuth()
  const navigate = useNavigate()
  
  // Logs user out
  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <div className='p-4 mt-3 text-center'>
        <h1 className='display-2 text-white'>Welcome, </h1>
        <br/>
        <div className='display-6 text-white'>
          {user && user.email}
        </div>
        
      </div>
      <div className='d-grid gap-2 col-6 mx-auto mt-5'>
        <Button className='logout-btn btn-md' variant='primary' onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  )
}

export default Home