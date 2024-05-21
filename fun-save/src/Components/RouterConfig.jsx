import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import Login from '../Pages/Login';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Login/>}/>
      {/* <Route path='/restaurant-detail?:id' element={<Details />}/> */}
    </Routes>
  );
};

export default RouterConfig;
