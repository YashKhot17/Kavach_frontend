import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import heroImg from '../utils/hero.png';
import Footer from '../components/Footer'


const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className='Hero'>
        <div className='left'>
          <div>
            <div className='title'><p>KVH-005</p></div>
            <p>Advanced Automatic Number Plate Recognition and Face Recognition System</p>
          </div>
          <Link to="/signup"><button className='signup'>Sign Up→</button></Link>
          <Link to="/login"><button className='login'>Log in</button></Link>
        </div>
        <div className='right'>
          <img src={heroImg} alt='Hero'></img>
        </div>
      </div>
      <div className='PS-container'>
        <div className='PS'>
          <div className='title'>Problem Statement</div>
          <div className='content'>Design and develop a technological solution that can accurately perform the ANPR along with Facial Recognition from the available CCTV feeds</div>
        </div>
      </div>
      <div className='Logo-container'>
        <div className='Logo'>
          <div className='title'>Special Thanks to</div>
          <div className='Logos'>
            <img src='https://mic.gov.in/assets/images/MIC_LOGO.png' alt='MIC_logo'></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ministry_of_Home_Affairs_India.svg/1200px-Ministry_of_Home_Affairs_India.svg.png' alt='MHA_logo'></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Ministry_of_Education_India.svg' alt='MoE_logo'></img>
            <img src='https://i4c.mha.gov.in/assets/images/final-i4c%20Logo-big-size.png' alt='I4C_logo'></img>
            <img src='https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png' alt='AICTE_logo'></img>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/G20_India_2023_logo.svg/2560px-G20_India_2023_logo.svg.png' alt='G20_logo'></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Landing