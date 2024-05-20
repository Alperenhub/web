import React, { useState } from 'react'


const Home = () => {

    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');

const async api = (username,password) => {

}


return (
    <div>
    <input id='userName' type='text'/>
    <input id='password' type='password'/>
      <button onClick={api(user,password)}>Tıkla</button>
    </div>
  )
}

export default Home
