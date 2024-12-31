import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
          Sonu Singh
        </h1>
        <div className='hidden lg:flex'>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className='mr-2'>I am</span>
            
            <Typewriter
              options={{
                loop: true,
              }}

              onInit={(typewriter) => {
                typewriter
                  .typeString("Mern Stack Developer")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
          With a passion for creating captivating user experiences, I specialize
          in developing web application and website using mern stack while incorporating
          appealing design principles.
        </p>
        <div>
          <div className="text-white group border-none px-6 py-3 my-2 flex items-center rounded-sm  font-semibold">
            Explore{" "}
            <span className="group-hover:translate-x-2 duration-300">
              {" "}
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;