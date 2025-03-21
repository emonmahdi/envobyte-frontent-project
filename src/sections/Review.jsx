import React from "react";
import { FaStar } from "react-icons/fa";
import fiverr from "./../assets/fiverr.png";
// import upwork from './../assets/upwork.png'

const reviews = [
  {
    id: 1,
    name: "Stephanie Powell",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”",
    icon: "https://i.ibb.co.com/zTCRGxFB/fiverr.png",
  },
  {
    id: 2,
    name: "Brian Clark",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”",
    icon: "https://i.ibb.co.com/JjGtpFGY/upwork.png",
  },
  {
    id: 3,
    name: "Christopher",
    title: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”",
    icon: "https://i.ibb.co.com/zTCRGxFB/fiverr.png",
  },
  {
    id: 4,
    name: "Brian Clark",
    title: "Marketing Lead",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”",
    icon: "https://i.ibb.co.com/JjGtpFGY/upwork.png",
  },
  {
    id: 5,
    name: "Christopher",
    title: "Tech Lead",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”",
    icon: "https://i.ibb.co.com/zTCRGxFB/fiverr.png",
  },
  {
    id: 6,
    name: "Stephanie Powell",
    title: "CEO, Startup",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review: "“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”",
    icon: "https://i.ibb.co.com/JjGtpFGY/upwork.png",
  },
];

/* https://ibb.co.com/LXBtnRrc
https://ibb.co.com/YB1QdT15 */
const Review = () => {
  return (
    <div className="flex justify-center items-end w-full py-12">
      <div className="p-6">
        <div className="text-center mb-8">
          <h6 className="text-lg font-semibold text-[#0C89FF] text-[20px]">
            CLIENT REVIEWS
          </h6>
          <h2 className="font-[800] text-[#001246] text-[45px] leading-[51px] tracking-wide mb-4">
            Our Proud Clients
          </h2>
        </div>
        <div className="w-[984px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((client) => (
              <div
                key={client.id}
                className="bg-white shadow-lg rounded-lg p-6 border border-[#ddd] transition duration-300"
              >
                {/* Star Rating */}
                <div className="flex justify-start mb-4 text-[#4580FF]">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} size={20} />
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-gray-600 mb-4 text-start">{client.review}</p>
                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#0A2C8C]">
                      {client.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <img src={fiverr} alt="" />
                      <p className="text-sm text-gray-500">{client.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
