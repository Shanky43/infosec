import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/register' element={<SignUp />} />
            <Route path='/login' element={<SignIn />} />
        </Routes>
    )
}

export default AllRoutes