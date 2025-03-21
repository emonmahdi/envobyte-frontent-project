import React from 'react';
import email from '../assets/email.png'
import whatsapp from '../assets/whatsapp-footer.png'
import face from '../assets/face.png'
import linked from '../assets/linked.png' 
import pin from '../assets/pin.png'

const Footer = () => {
  return (
    <footer className="bg-[#03165A] text-white py-10 px-6 md:px-16 lg:px-32 xl:px-48">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">
          {/* First Column (Logo + Text) */}
          <div className="flex flex-col justify-between md:col-span-1 space-y-4">
            <div className=""> 
              <span className="text-xl font-bold text-white">Envobyte</span>
              <p className="text-gray-300 my-2">We are an IT Company. We help businesses to bring ideas to life easily and affordably.</p>
            </div>
            
          </div>

          {/* Second Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Learn More</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Web Development</a></li>
              <li><a href="#" className="hover:text-gray-300">App Development</a></li>
              <li><a href="#" className="hover:text-gray-300">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-gray-300">SEO</a></li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Supports</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Case Studies</a></li>
              <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
            </ul>
          </div>

          {/* Fifth Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <ul className="space-y-2">
              <li className='flex gap-2'> 
                <img src={email} alt="" />
                <p>support@envobyte.com</p>
              </li>
              <li className='flex gap-2'> 
                <img src={whatsapp} alt="" />
                <p>+1 (667) 777 2477</p>
              </li> 
            </ul>
            <div className='flex gap-2'>
                <span>
                    <img src={face} alt="" />
                </span>
                <span>
                    <img src={linked} alt="" />
                </span> 
                <span>
                    <img src={pin} alt="" />
                </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2025 Envobyte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
