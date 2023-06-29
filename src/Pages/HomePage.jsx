import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import SideBar from '../Components/SideBar/SideBar'
import "../Styles/homepage.css"
const HomePage = () => {
    return (
        <div>
            <div><NavBar /></div>
            <div className='sidebar-start'>
                <div className='sidebar-0'>
                    <div className='sidebar-1'>
                        <SideBar />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage