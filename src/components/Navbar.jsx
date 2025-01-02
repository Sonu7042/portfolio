import React, { useEffect, useState } from "react";
import { FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    setNav(!nav);
    setBackToTop(false);
  };

  return (
    <div
      className={`fixed w-full h-[10vh] flex justify-between items-center px-4 bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 z-20 ${
        showShadowNav ? "shadow-lg" : ""
      }`}
    >
      <div>
        <h1 className="font-medium text-xl lg:text-2xl">Portfolio</h1>
      </div>

      {/* Menu for Larger Screens */}
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-[#00FFCA]">
          <Link to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#00FFCA]">
          <Link to="about" smooth duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#00FFCA]">
          <Link to="skill" smooth duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#00FFCA]">
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-[#00FFCA]">
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu for Smaller Screens */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <BsGridFill size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 w-[80%] h-screen bg-[#3A1078] flex flex-col items-center justify-center transition-transform ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-2xl">
          <li>
            <Link onClick={handleClick} to="home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="about" smooth duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="skill" smooth duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="contact" smooth duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="mt-10 text-gray-200">
          <p>&copy; 2024 All rights reserved</p>
        </div>
      </div>

      {/* Back to Top Button */}
      {backToTop && (
        <div className="fixed bottom-4 right-4 bg-white text-[#3A1078] p-3 rounded-full shadow-lg cursor-pointer">
          <button onClick={scrollUp}>
            <HiArrowSmUp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
