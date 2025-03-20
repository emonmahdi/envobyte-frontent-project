import React from 'react'

const data = [
    {
        id:1,
        img:'https://i.ibb.co.com/dwnzhjNk/p1.png'
    },
    {
        id:2,
        img:'https://i.ibb.co.com/9myyJzSX/p2.png'
    },
    {
        id:3,
        img:'https://i.ibb.co.com/FLZ8rX1Z/p3.png'
    },
    {
        id:4,
        img:'https://i.ibb.co.com/PZgC0sRJ/p4.png'
    },
    {
        id:5,
        img:'https://i.ibb.co.com/PZgC0sRJ/p4.png'
    },
    {
        id:6,
        img:'https://i.ibb.co.com/FLZ8rX1Z/p3.png'
    },
    {
        id:7,
        img:'https://i.ibb.co.com/9myyJzSX/p2.png'
    },
    {
        id:8,
        img:'https://i.ibb.co.com/dwnzhjNk/p1.png'
    },
]

const Portfolio = () => {
  return (
     <section className="py-10 bg-[#03135B]">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Left Section */}
            <div>
              <p className="text-sm text-white font-semibold">
              UI/UX PORTFOLIO
              </p>
              <h2 className="text-2xl font-bold text-white">
              Check Our Previous Work
              </h2>
            </div>
    
            {/* Right Section */}
            <div>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                All Portfolio
              </button>
            </div>
          </div>
          {/* Divider */}
          <hr className="mt-6 border-gray-300" />
          <div className="container mx-auto">
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="#" className="text-blue-600 hover:underline">
                UI/UX
              </a>
              <a href="#" className="text-white hover:underline">
              Website
              </a> 
              <a href="#" className="text-white hover:underline">
                SEO
              </a>
              <a href="#" className="text-white hover:underline">
                Banner Design
              </a> 
              <a href="#" className="text-white hover:underline">
                Google Ads
              </a>
            </div> 
            
          </div>
           {/* Portfolio Slider */}
      <div className="mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> 
           
          {/* Other Images - Full Width */}
          {data.map((item) => (
            <div key={item.id}>
              <img
                src={item.img}
                alt="Portfolio Item"
                className="w-full h-[281px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
           
        </section>
  )
}

export default Portfolio


/* 
https://ibb.co.com/ksYWd5Lq - https://i.ibb.co.com/dwnzhjNk/p1.png
https://ibb.co.com/GfCCXBNw - https://i.ibb.co.com/9myyJzSX/p2.png
https://ibb.co.com/W48Bh0X8 - https://i.ibb.co.com/FLZ8rX1Z/p3.png
https://ibb.co.com/VWTB50db - https://i.ibb.co.com/PZgC0sRJ/p4.png

*/