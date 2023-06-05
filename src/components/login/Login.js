import React from 'react'
import './Logis.scss'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
const Login = () => {
  return (
    <section className='login'>
        <div className="--card">
            <h2>Login</h2>
            <div className="--form-control">
                  <input type="text" placeholder='Username' />
            <div className="password">
                <input type="password" placeholder='Password'/>
                <div className="icon">
                    <AiOutlineEye/>
                    
                </div>
                <button>Login</button>
             </div>
            </div>

        </div>
    </section>
  )
}

export default Login