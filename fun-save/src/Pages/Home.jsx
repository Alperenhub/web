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
import Header from '../Components/Header';

const Home = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
          debugger  
          const token = localStorage.getItem('token');
            
            if (!token) {
                setError("Token not found. Please login again.");
                return;
            }

            try {
                const response = await axios.get('https://localhost:7181/api/Restaurant/GetAll', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                setRestaurants(response.data);
            } catch (error) {
                setError(error.response ? error.response.data.message : error.message);
                console.error('Error fetching restaurants:', error);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div>
            <Header />
            <div className='top-0 z-0'>
                <img className='w-full h-screen bg-auto' src='/homebg.jpg' />
                <div className="absolute inset-0 flex items-center justify-start">
                    <div className='ml-24'>
                        <h2 className="text-white text-8xl font-bold ">Explore Türkiye</h2>
                        <h4 className='text-white text-6xl font-bold mt-2'>& Save in best places!</h4>
                    </div>
                    <div className='absolute right-0 bg-[#00A79D] flex flex-row p-3 items-center rounded-l-xl gap-4'>
                        <span>  <TbShoppingBagPlus className='text-white size-6' /></span>
                        <p className='text-white text-2xl font-poppins'>Buy now!</p>
                    </div>
                </div>
            </div>
            <div className='z-20 fixed rounded-xl right-0 top-7 bg-[#00A79D]'>
                <button onClick={logout} className='p-2 text-white'>Çıkış yap</button>
            </div>
            <div className='mx-[150px] -mt-[80px] w-[80%] flex flex-row justify-center items-center z-10 gap-20'>
                <Membership bg='#8F8D8D' member='Silver' height='147px' width='262px' />
                <Membership bg='#E0A93F' member='Gold' height='124px' width='245px' />
                <Membership bg='#1A93DA' member='Diamond' height='124px' width='245px' />
            </div>
            <div className='flex justify-center mt-5 w-[100%] '>
                <div className='shadow-2xl shadow-[#2828283b] rounded-lg h-20 flex items-center'>
                    <Filter />
                </div>
            </div>
            <div className='w-[80%] mx-36 my-12 flex flex-row items-center'>
                <h1 className='font-poppins text-2xl'>Dining</h1>
                <RiEqualizerFill className='ml-auto text-[#00A79D] text-3xl' />
            </div>
            <div className='w-[100%] my-8 flex '>
                {error && <p className="error">{error}</p>}
                <div className='flex flex-col ml-36 w-full justify-center items-center '>
                    <ul className='flex flex-wrap '>
                        {restaurants.map((restaurant) => (
                            <li key={restaurant.id} className='w-1/2 my-3'>
                                <img onClick={() => navigate(`/restaurant/${restaurant.id}`)} className='rounded-2xl h-[210px] w-[500px] cursor-pointer' src={`./${restaurant.imageURL}`} />
                                <p className='text-center mr-52'>{restaurant.name}</p>
                                {/* <button className='border border-black rounded-xl' onClick={() => navigate(`/restaurant/${restaurant.id}`)}>restauranta git</button> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='w-[80%] mx-[120px] mb-4'>
                <p className='text-end font-poppins'>See All</p>
            </div>
            <div>
                <FirstPart />
            </div>
            <div className='w-[80%] mx-36 my-12 flex flex-row items-center'>
                <h1 className='font-poppins text-2xl'>Tourist Attractions</h1>
                <RiEqualizerFill className='ml-auto text-[#00A79D] text-3xl' />
            </div>
            <div className='w-[100%] my-8 flex '>
                {error && <p className="error">{error}</p>}
                <div className='flex flex-col ml-36 w-full justify-center items-center '>
                    <ul className='flex flex-wrap '>
                        {restaurants.map((restaurant) => (
                            <li key={restaurant.id} className='w-1/2 my-3'>
                                <img className='rounded-2xl h-[210px] w-[500px]' src={`./${restaurant.imageURL}`} />
                                <p className='text-center mr-52'>{restaurant.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <SecondPart />
            </div>
            <div className='border-b border-gray-300 shadow-md'>
                <LastPart />
            </div>
            <div>
                <Footer text={"Copyright 2022. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."}/>
            </div>
        </div>
    );
}

export default Home;
