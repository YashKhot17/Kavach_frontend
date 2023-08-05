
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';

// pages & components
import Landing from './pages/Landing'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            {/* <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            /> */}
            <Route path="/" element = {<Landing />}/>
            <Route path="login/" element = {<Login />}/>
            <Route path="/signup" element = {<Signup />}/>
            <Route path="/home" element = {<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
