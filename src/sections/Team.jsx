import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Mr Anik",
    title: "Backend Developer",
    image: "https://i.ibb.co.com/KzVy6WQ1/t1.png",
  },
  {
    id: 2,
    name: "Mr Shahed",
    title: "Frontend Developer",
    image: "https://i.ibb.co.com/5Wk6RdJ5/t2.png",
  },
  {
    id: 3,
    name: "Mr Mainul Islam",
    title: "SEO Expert",
    image: "https://i.ibb.co.com/mFBVbr4Q/t3.png",
  },
  {
    id: 4,
    name: "Mr Hasib",
    title: "Content Writer",
    image: "https://i.ibb.co.com/SwqjjFh1/t4.png",
  },
];

/* 
  https://ibb.co.com/NnWYxKk4
https://ibb.co.com/Z6SVM3bh
https://ibb.co.com/93vkcmWR
https://ibb.co.com/yFL99HwM
  
  */

const Team = () => {
  return (
    <div className="flex justify-center items-end w-full py-12">
      <div className="p-6">
        <div className="text-center mb-8">
          <h6 className="text-lg font-semibold text-[#0C89FF] text-[20px]">
            EXPERIENCED TEAM
          </h6>
          <h2 className="font-[800] text-[#001246] text-[45px] leading-[51px] tracking-wide mb-4">
            Our Team Members
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-[#ddd]">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`bg-[#0A2C8C] text-white shadow-lg 
      ${index % 4 !== 3 ? "lg:border-r border-[#ddd]" : ""} 
      ${index % 2 !== 1 ? "sm:border-r border-[#ddd]" : ""} 
      `}
            >
              {/* Team Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              {/* Member Info */}
              <div className="p-4">
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-300">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
