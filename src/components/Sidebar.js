import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../utils/Sidebar.css'

const Sidebar = () => {
  return (
    <Menu>
    <Link to='/search' className="menu-item">Search</Link>
    <Link to='/dashboard' className="menu-item">Dashboard</Link>
    <Link to='/register' className="menu-item">Register New Vehicle</Link>
    <Link to='/face' className="menu-item">Face Detected List</Link>
    <Link to='/action' className="menu-item">Take Action against Defaulters</Link>
    <hr />
    <Link to='/' className="menu-item">Logout</Link>
    </Menu>
  )
}

export default Sidebar