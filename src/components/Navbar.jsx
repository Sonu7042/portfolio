import React, { useEffect, useState } from "react";
import { FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { HiArrowSmUp, HiMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  
  const [nav, setNav] = useState(false); 
  const [backToTop, setBackToTop] = useState(false);
  const [showShadowNav, setShowShadowNav] = useState(false); 

  useEffect(() => {
        const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTop(true); 
        setShowShadowNav(true); 
      } else {
        setBackToTop(false); 
        setShowShadowNav(false);
      }
    };



    window.addEventListener("scroll", handleScroll);


  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Scrolls the window to the top of the page.
   */
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /**
   * Toggles the mobile menu on/off.
   */
  const handleClick = () => {
    setNav(!nav); // Toggle the visibility of the mobile menu
    setBackToTop(false); // Hide the scroll-to-top button when the mobile menu is open
  };

  return (
    <div className={!showShadowNav ? 'fixed w-full h-[10vh] flex justify-between items-center px-4 bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 z-20':'fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 z-20 shadow-2xl'}>
      <div>
        {/* <img src={Loo} alt="logo" style={{ width: "35px" }} /> */}
        <h1 className="font-medium text-xl lg:text-2xl">Portfolio</h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {/* Added comments for each navigation item */}
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>


        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">
          <Link to='about' smooth={true} duration={500}>About</Link>
        </li>

        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">
          <Link to='skill' smooth={true} duration={500}>Skills</Link>
        </li>


        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">
          <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <BsGridFill /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div className={
        !nav
          ? "hidden"
          : " fixed  w-full h-screen bg-[#3A1078] dark:bg-[#21073C]  flex flex-col justify-center items-center transition ease-in-out duration-300 delay-700"
      }>
        {/* Added comments for mobile menu */}
       
        <ul
          className='w-full  flex flex-col justify-center items-center '
        >
          {/* Added comments for each mobile menu item */}
          <li className="py-6 text-4xl hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
          </li>
          <li className="py-6 text-4xl hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">
            <Link onClick={handleClick} to='skill' smooth={true} duration={500}>Skills</Link>
          </li>
          
          <li className="py-6 text-4xl hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
        <div className="mt-10">
          <p>Copyright all rights reserved © 2024</p>
        </div>
      </div>

      {backToTop && (
        <div className="fixed flex-col top-[90%] right-2 md:right-6 animate-bounce bg-white text-[#3A1078] rounded-full">
          <button onClick={scrollUp} className="p-3">
            <HiArrowSmUp size={20} />
          </button>
        </div>
      )}

      {/* Social icons */}
      <div className="hidden  lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              target="_target"
              href="https://www.linkedin.com/in/sonu-singh-8b9130244/"
              className="flex justify-between items-center w-full text-[#3A1078]"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
            target="_target"
              href="https://github.com/Sonu7042"
              className="flex justify-between items-center w-full text-[#3A1078]"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

         

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              target="_target"  
              href="sonusinghmourya100@gmail.com" 
              className="flex justify-between items-center w-full text-[#3A1078]"
            >
              Email <HiMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;