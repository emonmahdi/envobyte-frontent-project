import React from "react";
import Button from "../components/Button";
import img from "../assets/work-bg.png";

const Work = () => {
  return (
    <div className="flex justify-center items-end w-full py-12 work-section">
      <div className="p-6">
        <div className="text-center mb-8">
          <h6 className="text-lg font-semibold text-white text-[20px]">
            HOW WE WORK
          </h6>
          <h2 className="font-[800] text-white text-[45px] leading-[51px] tracking-wide mb-4">
            Our Process For Delivering <br /> Results
          </h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry’s standard dummy
            text ever.
          </p>
        </div>
        <div className="text-center my-12">
          <img
            src={img}
            alt="Hero Image"
            className="w-full max-w-2xl mx-auto"
          />
        </div>
        <div className="w-full flex justify-center my-8">
          <Button>Contact Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Work;
