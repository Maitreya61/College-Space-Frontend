import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const Links = [
    { name: "Notes", link: "/notes" },
    { name: "Papers", link: "/papers" },
    { name: "Resources", link: "/resources" },
    { name: "Upload", link: "/upload" },
    { name: "Community", link: "/community" },
  ];
  const token = sessionStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className='shadow-md w-full fixed top-0 left-0 z-50'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
            <span className='text-3xl text-indigo-600 mr-2 pt-2'>
              <ion-icon name="book-outline"></ion-icon>
            </span>
            College Space
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
            {Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <Link onClick={() => setOpen(!open)} to={token ? link.link : "/register"} className={`text-gray-800 hover:text-gray-400 duration-500 relative ${location.pathname === link.link ? 'text-blue-500' : ''}`}>
                  {link.name}
                  {location.pathname === link.link && <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500"></span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-16 md:mt-20">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
