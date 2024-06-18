import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    
    const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-around items-center h-screen p-10">
      <div className="max-w-4xl flex flex-col items-center justify-center flex-grow-0 p-8 text-white">
        <h1 className="text-6xl font-bold text-center mb-4">Welcome to College Space</h1>
        <p className="text-2xl text-center">"Where students come together to learn, share, and connect"</p>
        <button onClick={()=> {navigate('/register')}} className='py-2 px-4 mt-5 text-xl bg-white text-blue-500 rounded-lg'>Get Started</button>
      </div>
      <div className="flex justify-center items-center">
        <img src="../college-space-image.jpg" alt="College Space" className="w-96 h-96 rounded-lg" />
      </div>
    </div>
  );
}

export default Home;
