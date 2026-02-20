import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RegisterForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function HandleSubmit(e) {

        e.preventDefault()


        axios.post("http://localhost:3000/api/auth/register", {
            username, password, email
        }, {
            withCredentials: true
        })
            .then(res => {
                console.log(res.data);

            })

    }
    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={HandleSubmit}>
                    <input onInput={(e) => { setUsername(e.target.value) }} type="text" name='Username' placeholder='Enter Username' />
                    <input onInput={(e) => { setEmail(e.target.value) }} type="email" name='Email' placeholder='Enter Email' />
                    <input onInput={(e) => { setPassword(e.target.value) }} type="text" name='Password' placeholder='Enter Password' />
                    <button type='submit'>Register</button>
                </form>
                <p>Already have an account? <Link className='toggle-auth-form' to='/login'>Login</Link></p>

            </div>

        </main>
    )
}

export default RegisterForm
