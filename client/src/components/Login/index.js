import { useState } from 'react';
import axios from 'axios';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './index.css'



const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };



  const registerButtonClicked = async ()=>{
    try {
        const response = await axios.post('/api/register',{test:'Test'})
        console.log(response.data)
    } catch (error) {
        console.log(error.message)
    }
    
  }


  return (
    <div className='login-form-bg'>
      <h2>Login</h2>
      <form className='form-control'>
        <div>
          <label htmlFor="usernameId">Username:</label>
          <input
            type="text"
            id="usernameId"
            placeholder='Enter Your UserName'
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className='form-control'
          />
        </div>
        <div>
          <label htmlFor="passwordId">Password:</label>
          <input
            type="password"
            id="passwordId"
            name="password"
            placeholder='Enter Your Password'
            value={formData.password}
            onChange={handleInputChange}
            required
            className='form-control'
          />
        </div>

        <div className='btn-bg'>
            <button type="button" className='btn btn-primary'>Login</button>
            <button type="button" className='btn btn-primary' onClick={registerButtonClicked}>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
