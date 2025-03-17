import { useState } from "react";
// import { Menu, X } from "lucide-react";
import logo from "./../assets/logo.png";
import Button from "../components/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#03135B] shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#" className="text-white hover:text-[#FF693B]">
            Home
          </a>
          <a href="#" className="text-white hover:text-[#FF693B]">
            Service
          </a>
          <a href="#" className="text-white hover:text-[#FF693B]">
            Combo Sales
          </a>
          <a href="#" className="text-white hover:text-[#FF693B]">
            Portfolio
          </a>
          <a href="#" className="text-white hover:text-[#FF693B]">
            About Us
          </a>
          <a href="#" className="text-white hover:text-[#FF693B]">
            Blogs
          </a>
        </nav>

        {/* Pricing Button */}
        <Button>See Pricing</Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <span className="text-white">X</span>
          ) : (
            <span className="text-white">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full p-4 flex flex-col space-y-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Portfolio
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Blogs
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            See Pricing
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
