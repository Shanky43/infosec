import React, { useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import SideBar from '../Components/SideBar/SideBar'
import "../Styles/homepage.css"
import SideBar2 from '../Components/SideBar/SideBar2'
import Content from '../Components/Content/Content'
const HomePage = () => {
    const [showContent, setShowContent] = useState(false)
    return (
        <div>
            <div><NavBar setShowContent={setShowContent} /></div>
            <div className='sidebar-start'>
                <div className='sidebar-0'>
                    <div className='sidebar-1'>
                        <SideBar setShowContent={setShowContent} />
                        {showContent === false ? null : <Content />}
                        <SideBar2 />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage