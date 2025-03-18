import { FaGlobe } from "react-icons/fa";
import Button from "../components/Button";
import heroImg from '../assets/hero-img.png';

const HeroArea = () => {
  return (
    <div className="hero-section bg-[#03135B] text-white flex flex-col items-center justify-center text-center py-16 px-4 overflow-hidden sm:py-24 md:py-32">
      <div className="hero-text mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          DIGITAL SERVICES
        </h1>
        <h4 className="text-lg sm:text-xl md:text-2xl mt-2">
          BUILDING YOUR EMPIRE DIGITALLY
        </h4>
        <div className="hero-buttons mt-6 flex flex-wrap space-x-4 justify-center">
          {/* First Button - See Pricing */}
          <Button className="bg-blue-500 hover:bg-white border border-blue-500 px-6 py-2 rounded-lg text-white text-lg hover:text-blue-500 transition mb-4 sm:mb-0">
            See Pricing
          </Button>

          {/* Second Button - Book An Appointment */}
          <button className="border border-white px-6 py-2 rounded-lg text-white text-lg hover:bg-[#FF693B] hover:border-[#FF693B] transition mb-4 sm:mb-0">
            Book An Appointment
          </button>
        </div>
      </div>

      <div className="hero-icon-area w-full max-w-7xl mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex items-center space-x-4 border-b sm:border-b-0 sm:border-r-2 border-gray-400 pb-4 sm:pb-0 sm:pr-4">
            {/* Icon Section */}
            <div className="p-3 bg-blue-600 text-white rounded-lg">
              <FaGlobe className="text-2xl" />
            </div>

            {/* Text Content */}
            <div className="text-left">
              <p className="text-2xl sm:text-3xl font-semibold">2K</p>
              <p className="text-sm sm:text-lg text-gray-300">Website Build</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 border-b sm:border-b-0 sm:border-r-2 border-gray-400 pb-4 sm:pb-0 sm:pr-4">
            {/* Icon Section */}
            <div className="p-3 bg-blue-600 text-white rounded-lg">
              <FaGlobe className="text-2xl" />
            </div>

            {/* Text Content */}
            <div className="text-left">
              <p className="text-2xl sm:text-3xl font-semibold">2K</p>
              <p className="text-sm sm:text-lg text-gray-300">Website Build</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 border-b sm:border-b-0 sm:border-r-2 border-gray-400 pb-4 sm:pb-0 sm:pr-4">
            {/* Icon Section */}
            <div className="p-3 bg-blue-600 text-white rounded-lg">
              <FaGlobe className="text-2xl" />
            </div>

            {/* Text Content */}
            <div className="text-left">
              <p className="text-2xl sm:text-3xl font-semibold">2K</p>
              <p className="text-sm sm:text-lg text-gray-300">Website Build</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 border-b sm:border-b-0 sm:border-r-2 border-gray-400 pb-4 sm:pb-0 sm:pr-4">
            {/* Icon Section */}
            <div className="p-3 bg-blue-600 text-white rounded-lg">
              <FaGlobe className="text-2xl" />
            </div>

            {/* Text Content */}
            <div className="text-left">
              <p className="text-2xl sm:text-3xl font-semibold">2K</p>
              <p className="text-sm sm:text-lg text-gray-300">Website Build</p>
            </div>
          </div>
        </div>

        <div className="text-center my-12">
          <img src={heroImg} alt="Hero Image" className="w-full max-w-2xl mx-auto"/>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
