import React from 'react'
import Navbar from '../components/Navbar'

const Face = () => {
  return (
    <div>
      <Navbar />
      <div className='face-container'>
        <div className='title'>List of Faces Detected</div>
        <div className='list-container'>
          <div className='list'>
            content
          </div>
        </div>
        <div className='btn'>
          <button className='submit'>Submit</button>
          <button className='cancel'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Face