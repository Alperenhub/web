import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TbShoppingBagPlus } from "react-icons/tb";
import Membership from '../Components/Membership';
import Filter from '../Components/Filter';
import FirstPart from '../partials/FirstPart';
import SecondPart from '../partials/SecondPart';
import LastPart from '../partials/LastPart';
import Footer from '../partials/Footer';
import { RiEqualizerFill } from "react-icons/ri";



const Home = () => {

    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem('token');
        navigate('/');
        }



        const [restaurants, setRestaurants] = useState([]);
        const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const token = localStorage.getItem('token'); // Bearer Token'ı yerel depolamadan al

      try {
        const response = await axios.get('https://localhost:7181/api/Restaurant/GetAll', {
          headers: {
            'Authorization': `Bearer ${token}`, // Bearer Token ile yetkilendirme
            'Content-Type': 'application/json'
          }
        });

        setRestaurants(response.data); // Verileri duruma kaydet
      } catch (error) {
        setError(error.message);
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []); // Bileşen yüklendiğinde sadece bir kez çalışır


  return (
    <div>
        <div className='top-0 z-0'>
            <img className='w-full h-screen bg-auto' src='/homebg.jpg' />
            <div className="absolute inset-0 flex items-center justify-start">
              <div className='ml-24'>
          <h2 className="text-white text-8xl font-bold ">Explore Türkiye</h2>
          <h4 className='text-white text-6xl font-bold mt-2'>& Save in best places!</h4>
          </div>
          <div className='absolute right-0 bg-[#00A79D] flex flex-row p-3 items-center rounded-l-xl gap-4'>
          <span>  <TbShoppingBagPlus className='text-white size-6'/></span>
            <p className='text-white text-2xl font-poppins'>Buy now!</p>
          </div>
        </div>
        </div>
        
        <div className='mx-[150px] -mt-[80px] w-[80%] flex flex-row justify-center items-center z-10 gap-20'>
            <Membership bg='#8F8D8D' member='Silver' height='147px' width='262px'/>
            <Membership bg='#E0A93F' member='Gold' height='124px' width='245px' />
            <Membership bg='#1A93DA' member='Diamond' height='124px' width='245px'/>
        </div>

        <div className='flex justify-center mt-5 w-[100%] '>
        <div className='shadow-2xl shadow-[#2828283b] rounded-lg h-20 flex items-center'>
          <Filter/>
        </div>
        </div>

        <div className='w-[80%] mx-36 my-12 flex flex-row items-center'>
          <h1 className='font-poppins text-2xl'>Dining</h1>
          <RiEqualizerFill className='ml-auto text-[#00A79D] text-3xl'/>
        </div>

        <div className='w-[80%] mx-36 my-8 '>
      <h1>Restaurant List</h1>

      {error && <p className="error">{error}</p>}
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name} <img src={`./${restaurant.imageURL}`} /> 
          <p>{restaurant.categoryName}</p>
          <button 
          className='border border-black rounded-xl'
          // onClick={()=>navigate(`/restaurant-details?${restaurant.id}`)}
          >restauranta git</button>
          </li>
        ))}
      </ul>
    </div>


        <div>
          <FirstPart/>
        </div>

        <div>
          <SecondPart/>
        </div>

        <div className='border-b border-gray-300 shadow-md'>
          <LastPart/>
        </div>

        <div>
          <Footer/>
        </div>

        Home'dayım
        <div className='mt-10 h-[500px] w-full bg-[#3117ee]'>
        <p>Logout işi</p>
        <button
        onClick={()=>logout()} //bu fonksiyona router ile giriş sayfasına yönlendir.
        className='border border-black '>Log out</button>
   </div>

  


    </div>
  )
}

export default Home
