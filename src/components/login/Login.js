import {useState} from 'react'
import './Login.scss'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';

const Login = () => {

    const [passVisable , setPassVisable] = useState(false);
    const togglePassVisable = () =>{
        setPassVisable(!passVisable);
    }
    const [text,setText] = useState('Login');
    const changeLogin = (e) =>{
        setText(state => e.target.value)
    }

  return (
    <section className="login">
    <div className="wrapper-login">
      <h1>{text}</h1>
      <div className="form-input">
        <input type="text" placeholder="Username" className="Username" onChange={changeLogin}/>
        <div className="password">
          <input type={passVisable ? 'text' : 'password'} placeholder="Password" />
          <div className="icon" onClick={togglePassVisable}>
            {passVisable ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
          </div>
        </div>
        <button>Login</button>
      </div>
    </div>
  </section>
  )
}

export default Login