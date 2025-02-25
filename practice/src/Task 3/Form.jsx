import React from 'react'
import './Style.css'
const FormData = () => {
  return (   
    <div className='container'>
      <form className='contect-form'> 
        <h3>User sign-up</h3>
        <label>Username</label>
        <input type="text" placeholder='username'/><br /><br />
        <label>Email</label>
        <input type="email" placeholder='Email'/><br /><br />
        <label>Password</label>
        <input type="password" placeholder='Password'/><br /><br />
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default FormData
