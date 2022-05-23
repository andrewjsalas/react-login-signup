import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './components/UserAuthContext';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
            {/* User cannot access Home unless logged in. */}
            <Route path='/home' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }>
            </Route>
            <Route path='/' element={ <Login /> } />
            <Route path='/signup' element={ <Signup /> } />
          </Routes>
        </UserAuthContextProvider> 
        </Col>
      </Row>
    </Container>
  );
}

export default App;
