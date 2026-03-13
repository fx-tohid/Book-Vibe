import React from 'react';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <section className="px-20 py-10">
      <div className="bg-gray-100 rounded-3xl p-16 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content Side */}
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl font-serif font-bold leading-tight text-gray-900">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="bg-[#23BE0A] hover:bg-opacity-90 text-white font-bold py-4 px-7 rounded-lg transition-all">

            <Link to='/readList'>View The List</Link>
          </button>
        </div>

        {/* Right Image Side */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
            alt="The Dating Playbook For Men"
            className="w-full max-w-sm drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;