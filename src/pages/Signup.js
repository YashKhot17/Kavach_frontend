import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <Navbar />
      <form className="signup">
        <h2>Sign Up</h2>

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
        <h4>Already have an Account? <br /><Link to="/login">Click here to Login</Link></h4>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </div>
  )
}

export default Signup