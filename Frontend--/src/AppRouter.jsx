import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './features/auth/pages/LoginForm'
import RegisterForm from './features/auth/pages/RegisterForm'

function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<h1>Welcome to the App</h1>} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/register' element={<RegisterForm />} />

            </Routes>

        </BrowserRouter>
    )
}



export default AppRouter
