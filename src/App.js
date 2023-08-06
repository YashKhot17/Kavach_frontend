
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';

// pages & components
import Landing from './pages/Landing'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Register from './pages/Register';
import Search from './pages/Search';
import Face from './pages/Face';
import TakeAction from './pages/TakeAction';

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
            <Route path="/" element={<Landing />} />
            <Route path="login/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/face" element={<Face />} />
            <Route path="/action" element={<TakeAction />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
