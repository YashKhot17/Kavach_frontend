import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Navbar = () => {
  return (
    <header>
      <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
          <div className="navbar">
            <Link to="/">
              <h1>
                <span>
                  <img src='https://kavach.mic.gov.in/img/kavach-logo-white.png' alt="Kavach Logo"></img>
                </span>
                Advanced ANPR and FRS system
              </h1>
            </Link>
            {/* <nav>
                <Link to="/dashboard" style={{margin:30}}>Dashboard</Link>
                  <div className='user-details'>
                    <span>User</span>
                    <button>Log out</button>
                  </div>
                </nav> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar