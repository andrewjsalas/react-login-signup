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
        Welcome <br/>
        {user && user.email}
      </div>
      <div className='d-grid gap-2'>
        <Button variant='primary' onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  )
}

export default Home