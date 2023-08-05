import React from 'react'
import Navbar from '../components/Navbar'
import Chart from '../components/Chart_Admin'

const Admin = () => {
    return (
        <div>
            <Navbar />
            <div className='admin-container'>
            <div className='title'>Admin Dashboard</div>
                <div className='dashboard'>
                    <div className='left'>
                        <div className='content'>
                            <h1>10</h1>
                            Stolen
                        </div>
                        <div className='content'>
                            <h1>20</h1>
                            Criminal
                        </div>
                        <div className='content'>
                            <h1>100</h1>
                            Valid
                        </div>
                    </div>
                    <div className='right'>
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin