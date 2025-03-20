import React from "react"; 
import Button from "../components/Button";

const data = [
    {
        id:1,
        title:'Why Chose Envobyte',
        subtitle:"Experienced & trustworthy",
        description:"We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.",
        img:'https://i.ibb.co.com/5XfDSqbC/d1-2.png',
    },
    {
        id:2,
        title:'What’s Your Benefit',
        subtitle:"No hassle with best price",
        description:"A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.",
        img:'https://i.ibb.co.com/0jRMjq9N/d2.png',
    },
    {
        id:3,
        title:'What is Combo Offer',
        subtitle:"Get 9 services in one package",
        description:"You’re getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!",
        img:'https://i.ibb.co.com/N6HQhXVf/d3.png',
    },
]


const MoreDetails = () => {
  return (
    <div className="flex justify-center items-end w-full min-h-screen py-12">
      <div className="w-[1107px] h-[717px] p-6">
        <div className="text-center mb-8">
          <h6 className="text-lg font-semibold text-gray-600">More Details</h6>
          <h2 className="text-3xl font-bold text-[#0A2C8C]">
            Get Your Answers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "bg-[#03135B] text-[#fff]" : "bg-white text-black"
              } p-6 border border-[#ddd]`}
            >
              <img
                src={item.img}
                alt="Placeholder"
                className="w-[254px] h-[257px] rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{item?.title}</h3>
              <h4 className="text-md font-semibold text-[#0A2C8C]">
                {item.subtitle}
              </h4>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center my-8">
          <Button>See More</Button>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;

// https://ibb.co.com/Y7d65qZr
// https://ibb.co.com/5Wg8WTjD
// https://ibb.co.com/MD3WTb2K