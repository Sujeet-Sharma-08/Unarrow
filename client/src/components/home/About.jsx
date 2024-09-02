import React from "react";
import CustomArrow from "../customs/CustomArrow";
import CustomButton from "../customs/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import aboutImage from "../../assets/about.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function handleCall() {
    navigate("/contact");
  }
  return (
    <div className="w-full relative h-full py-10 bg-[#011415]">
      <div className="w-11/12 mx-auto p-2">
        <div className="flex gap-5 ml-20 justify-center">
          {/* Left Section */}
          <div className="w-1/2">
            <div className="flex flex-col -ml-6">
              <p className="text-white text-lg font-Roboto ml-[5.6rem] mb-1">
                Designing Tomorrow Today
              </p>
              <div className="flex items-center gap-4 ml-14 mb-14">
                <div className="w-4 h-4 mt-1 bg-[#db4a2b]"></div>
                <h3 className="text-4xl text-white font-bold font-Roboto">
                  About Us
                </h3>
              </div>
            </div>

            <p className="max-w-lg text-white font-Roboto text-[1.5rem] font-normal leading-normal">
              Welcome to “Unarrow”, where innovation meets excellence in digital
              solutions. As a leading player in the industry, we pride ourselves
              on delivering cutting-edge technology and unparalleled service.
              Our team of experts is dedicated to transforming your digital
              landscape with tailor-made solutions that drive growth and
              efficiency.
            </p>

            <div onClick={handleCall} className="flex mt-8 ml-16">
              <CustomButton label={"Learn More"} />
              <CustomArrow icon={<FiArrowUpRight />} />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 mb-20 ">
            <img
              src={aboutImage}
              className="w-[35rem] h-[30rem] absolute border-2 hover:scale-105 duration-300 transition-all rounded-2xl z-50 object-cover m-auto"
              alt="This is an about image"
            />
            <div className="w-[35rem] h-[30rem] absolute hover:scale-105 duration-300 transition-all mt-10 -ml-10 bg-[#db4a2b] rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
