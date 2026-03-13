import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-6 bg-white">
      <div className="text-2xl font-extrabold text-black">
        Book Vibe
      </div>

      <ul className="flex items-center gap-8 text-gray-600 font-medium">
        <NavLink to='/' className='px-5 py-2  hover:text-green-500 rounded-lg hover:bg-green-50 transition-colors'>
          Home
        </NavLink>
        <NavLink to='/readList' className="cursor-pointer hover:text-green-500 transition-colors">
          Listed Books
        </NavLink>
        <NavLink to='/pagesRead' className="cursor-pointer hover:text-green-500 transition-colors">
          Pages to Read
        </NavLink>
      </ul>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-[#23BE0A] text-white font-semibold rounded-lg hover:bg-opacity-90">
          Sign In
        </button>
        <button className="px-6 py-3 bg-[#59C6D2] text-white font-semibold rounded-lg hover:bg-opacity-90">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Header;