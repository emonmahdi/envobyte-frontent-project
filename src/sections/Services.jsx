import serviceOne from '../assets/service1.png'

const Services = () => {
  return (
    <section className="py-10 bg-[#03135B]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Section */}
        <div>
          <p className="text-sm text-white font-semibold">
            Digital Services
          </p>
          <h2 className="text-2xl font-bold text-white">
            Check our Available Services
          </h2>
        </div>

        {/* Right Section */}
        <div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            All Services
          </button>
        </div>
      </div>
      {/* Divider */}
      <hr className="mt-6 border-gray-300" />
      <div className="container mx-auto">
        <div className="mt-4 flex flex-wrap gap-4">
          <a href="#" className="text-blue-600 hover:underline">
            Website
          </a>
          <a href="#" className="text-white hover:underline">
            Logo
          </a>
          <a href="#" className="text-white hover:underline">
            UI/UX
          </a>
          <a href="#" className="text-white hover:underline">
            SEO
          </a>
          <a href="#" className="text-white hover:underline">
            Banner
          </a>
          <a href="#" className="text-white hover:underline">
            Google Ads
          </a>
        </div>
        {/* Services Grid */}
       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((service) => (
            <div key={service} className="bg-[#0A236B] p-6 rounded-lg shadow-lg text-center">
              <img 
                src={serviceOne} 
                alt="Service" 
                className="mx-auto mb-4 w-24 h-24 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Service Title {service}</h3>
              <p className="text-white mt-2">This is a brief description of the service.</p>
              <div className="mt-4 flex justify-center gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Learn More</button>
                <button className="bg-gray-300 text-white px-4 py-2 rounded-lg hover:bg-gray-400 transition">Contact</button>
              </div>
            </div>
          ))}
        </div>
      </div>
       
    </section>
  );
};

export default Services;
