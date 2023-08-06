import React from 'react'
import Navbar from '../components/Navbar'

const TakeAction = () => {
  return (
    <div>
      <Navbar />
      <div className='action-container'>
        <div className='title'>Select Defaulters and Take Action</div>
        <div className='list-container'>
          <div className='list-left'>
            <div className='list'>
              content
            </div>
          </div>
          <div className='list-right'>
            <div className='pic'>
              Image
            </div>
            <div className='penalties'>
              <div className='title'>Penalties Drop-down</div>
              <div className='dropdown'>
                <select>
                  <option value="" disabled selected>
                    Select a Penalty
                  </option>
                  <option value="speeding">Speeding</option>
                  <option value="red-light">Running Red Lights or Stop Signs</option>
                  <option value="seat-belt">Seat Belt Violations</option>
                  <option value="mobile">Using Mobile Phones while Driving</option>
                  <option value="overloading">Overloading</option>
                </select>
              </div>
            </div>
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

export default TakeAction