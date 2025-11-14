import React from 'react'
import './Register.css'
import { ToastContainer } from 'react-toastify'

function Register() {
    function onRegister()
    {
       

    }
 
 return (
    <div className='container'>
      <h2 className='page-header'></h2>
      <div className='register-container'>
        <div className='mb-3'>
          <label htmlFor=''>First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Mobile Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type='tel'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Date of Birth</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='Date'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>

        <div>
       <p>alrady have an account</p>
        </div>
        <div>
          <button
            onClick={onRegister}
            className='btn btn-success'
          >
            Register
          </button>
        </div>
      </div>
    </div>
 )
}

export default Register
