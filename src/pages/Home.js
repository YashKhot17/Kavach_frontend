import React from 'react'
import Scroll from '../components/Scroll'
import VehicleDetails from '../components/Vehicles';
import DefaulterDetails from '../components/Defaulter';
import Map from '../components/Map';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
    <Navbar />
      <Scroll />
      <div className="home">
        <div className="tasks">
          <VehicleDetails />
        </div>
        <div className="tasks">
          <DefaulterDetails />
        </div>
        <Map />
      </div>
    </div>
  )
}

export default Home