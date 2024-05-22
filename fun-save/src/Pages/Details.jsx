import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import Footer from '../partials/Footer';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailsIcons from '../Components/DetailsIcons';
import Kupons from '../Components/Kupons';
import Kupons2 from '../Components/Kupons2';
import '../App.css'

const Details = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
}

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      const token = localStorage.getItem('token');  // Token'ı local storage'dan alın
      if (!token) {
        console.error('Token not found in local storage');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://localhost:7181/api/Restaurant/GetDetail?id=${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        setRestaurant(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
        setLoading(false);
      }
    };

    fetchRestaurantDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!restaurant) {
    return <div>No details available</div>;
  }

  return (
    <div>
      <Header />
      <div className='z-20 fixed rounded-xl right-0 top-7 bg-[#00A79D]'>
                <button onClick={logout} className='p-2 text-white'>Çıkış yap</button>
            </div>
      <div className='flex flex-col w-full '>
        <div className='mt-36 flex flex-row w-[50%] ml-40'>
          <div>
            <h1 className='font-poppins text-2xl'>{restaurant.name}</h1>
            <p className='font-poppins mt-4'>{restaurant.description}</p>
          </div>
          <div className='flex flex-row gap-2 mr-[40px]'>
            <FaRegHeart className='bg-red-600 size-8 p-1 rounded-full text-white border-2 border-white shadow-xl' />
            <IoShareSocial className='bg-red-600 size-8 p-1 rounded-full text-white border-2 border-white shadow-xl' />
          </div>
        </div>

        
        <div className='flex flex-row gap-4 overflow-x-auto custom-scrollbar'>
         <div>
          <img className='ml-40 mt-16' src={`${restaurant.imageURL}`} />
          </div>
          <div>
          <img className='ml-40 mt-16' src={`${restaurant.imageURL}`} />
          </div>
          <div>
          <img className='ml-40 mt-20 h-[70%]' src={`${restaurant.imageURL}`} />
          </div>
      </div>

        <div className='mt-16'>
          <DetailsIcons adres={restaurant.address}
          phone={" (0212) 334 83 00"}
          web={"www.ranna.com.tr"}/>
        </div>

      <div>
        <Kupons/>
      </div>

      <div className='mb-24'>
        <Kupons2/>
      </div>

      </div>
      
      <div className='shadow-black shadow-xl border-t border-[#cccccc73]'>
      <Footer text={"Copyright 2023. TFS Dijital Pazarlama Anonim Şirketi. All rights reserved."}/>
      </div>
    </div>
  );
}

export default Details;
