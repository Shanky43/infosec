import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import HomePage from '../Pages/HomePage'
import PrivateRoutes from './PrivateRoutes'


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PrivateRoutes><HomePage /></PrivateRoutes>} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/login' element={<SignIn />} />
            </Routes>
        </>
    )
}

export default AllRoutes