 
import message from '../assets/message.png'
import linkedin from '../assets/linkedin.png'
import whatapp from '../assets/whatsapp.png'

const ContactSection = () => {
  return (
    <section className="text-white py-16 px-4 contact-section">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <div className="p-6 rounded-lg border border-[#4B62B2] text-white bg-transparent">
          <form className="space-y-4 ">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input-field border border-[#4B62B2] rounded-sm px-2 py-1 focus:outline-none focus:ring-0"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field border border-[#4B62B2] rounded-sm px-2 py-1 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Phone & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium">Phone</label>
                <input
                  type="text"
                  placeholder="Enter your phone"
                  className="input-field border border-[#4B62B2] rounded-sm px-2 py-1 focus:outline-none focus:ring-0"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium">Company</label>
                <input
                  type="text"
                  placeholder="Enter your company"
                  className="input-field border border-[#4B62B2] rounded-sm px-2 py-1 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm font-medium">Message</label>
              <textarea
                placeholder="Your message here..."
                className="input-field h-40 border border-[#4B62B2] rounded-sm px-2 py-1 focus:outline-none focus:ring-0"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button className="bg-[#2140A8] text-[#fff] font-semibold px-6 py-2 rounded-md transition">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right: Contact Info & Social Media */}
        <div className="flex flex-col w-[551px]">
          <h2 className="text-[32px] font-bold mb-6">
            Let us know what you think!
          </h2>
          <p>
            Got something on your mind? Share it with us! Drop a message, and
            well respond quickly to assist you
          </p> 
           <div className="flex gap-3 items-center mt-4 pb-4 border-b border-[#4B62B2]">
            <div>
                <img src={message} alt="" />
            </div>
            <div>
                <p>Business</p>
                <p>support@envobyte.com</p> 
            </div>
           </div>
           <div className="flex gap-3 items-center mt-4 pb-4 border-b border-[#4B62B2]">
            <div>
                <img src={whatapp} alt="" />
            </div>
            <div>
                <p>Whatsapp</p>
                <p>+1 (667) 777 2477</p> 
            </div>
           </div>
           <div className="flex gap-3 items-center mt-4 pb-4 border-b border-[#4B62B2]">
            <div>
                <img src={linkedin} alt="" />
            </div>
            <div>
                <p>Linkedin</p>
                <p>www.linkedin.com/company/envobyte</p> 
            </div>
           </div>
           
        </div>
      </div>
    </section>
  );
};

// Contact Info Item Component
const ContactItem = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-4 text-lg bg-white text-gray-800 px-4 py-2 rounded-md shadow-md">
      <div className="text-[#0A2C8C] text-2xl">{icon}</div>
      <span className="font-medium">{name}</span>
    </div>
  );
};

// Tailwind Input Styling
// const inputStyles = `border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2C8C]`;
export default ContactSection;
