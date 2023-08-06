import React from 'react'
import Navbar from '../components/Navbar'

const Register = () => {
    return (
        <div>
        <Navbar />
            <div className='register-container'>
                <div className='title'>Register New Vehicle</div>
                <form className='regs'>
                    <label>Registration Number:</label>
                    <input type='text' id="registrationNo"/>
                    <label>Owner Name:</label>
                    <input type='text' id="ownerName"/>
                    <label>Ownership Details:</label>
                    <input type='text' id="ownershipDetails"/>
                    <label>Model Name:</label>
                    <input type='text' id="modelName"/>
                    <label>Registration Date:</label>
                    <input type='date' id="registrationDate"/>
                <div></div><div className='title in'>Car Data</div>
                    <label>Vehicle Class:</label>
                    <input type='text' id="vehicleClass"/>
                    <label>Body Type:</label>
                    <input type='text' id="bodyType"/>
                    <label>Fuel Type:</label>
                    <input type='text' id="fuelType"/>
                    <label>Maker Name:</label>
                    <input type='text' id="makerName"/>
                    <label>Fuel Norms:</label>
                    <input type='text' id="fuelNorms"/>
                    <label>Engine Numbe:</label>
                    <input type='text' id="engineNumbe"/>
                    <label>Chassis Number:</label>
                    <input type='text' id="chassisNumber"/>
                    <label>PUC No:</label>
                    <input type='text' id="puccNo"/>
                    <label>Color:</label>
                    <input type='text' id="color"/>
                    <label>Insurance Company:</label>
                    <input type='text' id="insuranceCompany"/>
                    <label>Finance By:</label>
                    <input type='text' id="financeBy"/>
                    <label>Seat Capacity:</label>
                    <input type='text' id="seatCapacity"/>
                    <label>Unload Weight Value: (in kgs)</label>
                    <input type='text' id="unloadWeightValue"/>
                </form>
                <div className='title'>
                    <input type="submit" value="Submit"></input>
                </div>
            </div>

        </div>
    )
}

export default Register