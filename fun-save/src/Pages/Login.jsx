import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');

    const [token1,setToken] = useState('');

    const handleChange =(e) =>{
       setUser(e.target.value); 
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }


    const navigate = useNavigate();

const api = () => {
 console.log(user+ " "+ password)
}



async function authenticateUser(username, password) {
    // debugger
    const url = 'https://localhost:7181/api/Authentication';
    const requestBody = {
      username: username,
      password: password
    };
  
    try {
      const response = await axios.post(url, requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data; // Assuming the token is returned in the JSON response as { "token": "your_token_here" }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }



//   const logout = () =>{
//     localStorage.removeItem('token');
    
//     }


return (

    <div>
    <input className='border border-black'
    id='userName' 
    type='text'
    value={user} 
    onChange={handleChange}
    />
    <input className='border border-black'
    id='password' 
    type='password'
    value={password}
    onChange={handlePassword}
    />
      <button className='bg-cyan-500' onClick={()=>api()}>konsola yaz</button>

        <button className='bg-slate-500' onClick={()=>authenticateUser(user, password)
  .then(token => {
    if (token) {
        setToken(token)
        localStorage.setItem('token', token);
//YÖNLENDİR
        navigate('/home');
      console.log('Received token:', token);
      
      // Token ile ilgili işlemler burada yapılabilir
    } else {
      console.log('Authentication failed');
    }
  })}>ALİZADE</button>
   
   <p>{token1}</p>

   {/* <div className='mt-10 h-[500px] w-full bg-[#3117ee]'>
        <p>Logout işi</p>
        <button
        onClick={()=>logout()} //bu fonksiyona router ile giriş sayfasına yönlendir.
        className='border border-black '>Log out</button>
   </div> */}
    </div>
  )
}

export default Login
