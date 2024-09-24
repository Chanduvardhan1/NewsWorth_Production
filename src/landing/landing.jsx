import React, { useState, useEffect } from "react";
import logo from '../../src/assets/Images/home/NewsWorth.png'
import ball from '../../src/assets/Images/landing/bell.png'
import photo from '../../src/assets/Images/landing/pic.jpg'
import { useNavigate, useLocation } from "react-router-dom";

const landing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state?.user_id || localStorage.getItem("userId");
  const userName = location.state?.user_name ||localStorage.getItem("userName");


  const handleNavigation = () => {
    navigate('/dashboard'); // Navigate to the selected path
  };
  const handleProfile = () => {
    navigate('/profile'); // Navigate to the selected path
  };
  return (
    <div>
   <div className=" relative">
<div className=" w-full flex justify-between p-[5px] shadow-md ">
    <div className="flex justify-center items-center">
        <div>
        <img src={logo} alt="" onClick={handleNavigation} className=" cursor-pointer" />
        </div>
        <div>
        <h1 className="text-[25px] font-bold cursor-pointer " onClick={handleNavigation}>NewsWorth</h1>

        </div>
    </div>
  
    <div className="flex justify-center items-center gap-5 ">
    <div className=" grid-flow-row grid items-center">
        
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" class=" w-full lg:w-[500px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
        </div>
    
        </div>
      <div>
        <img src={ball} className="w-[20px] h-[20px]" alt="" />
      </div>
        <div>
            <h1 className=" cursor-pointer"  onClick={handleProfile}>Welcome <span  onClick={handleProfile} className=" font-bold cursor-pointer">{userName}</span> </h1>
            <p className=" cursor-pointer"   onClick={handleProfile}>User ID: {userId}</p>
        </div>
        <div>
            <img src={photo} alt="" className=" w-[45px] h-[45px] cursor-pointer" onClick={handleProfile} />
        </div>
    </div>
</div>
   </div>
    </div>
  );
};

export default landing;
