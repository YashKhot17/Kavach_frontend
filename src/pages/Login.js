import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div>
    <Navbar />
      <form className="login">
        <h2>Log In</h2>

        <label>Email address:</label>
        <input
          type="email"
        // onChange={(e) => setEmail(e.target.value)} 
        // value={email} 
        />
        <label>Password:</label>
        <input
          type="password"
        // onChange={(e) => setPassword(e.target.value)} 
        // value={password} 
        />
        <Link to="/home">
          <div className='btn'>
            <button>Submit</button>
          </div>
        </Link>
        <h4>New Here? <br /><Link to="/signup">Click here to Sign up</Link></h4>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </div>
  )
}

export default Login