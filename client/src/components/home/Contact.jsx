import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoCall } from "react-icons/io5";
import CustomButton from "../customs/CustomButton";
import CardSlider from "./CardSlider";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const formDataHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full relative h-full bg-[#011415] py-14 p-20 ">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col flex-wrap justify-center items-center">
            <div className="flex flex-col gap-4 md:w-[50%] lg:w-[35%]">
              <div className="flex items-center -ml-9 gap-4">
                <div className="w-4 h-4 mt-1 bg-[#db4a2b]"></div>
                <h3 className="text-4xl text-white font-bold font-Roboto">
                  Get In Touch
                </h3>
              </div>

              <p className="lg:w-[19.75rem] text-[1.25rem] font-normal font-Roboto leading-normal text-[#fff]">
                Our Friendly Teams Is Always Here to Hear You....
              </p>

              <div className="flex items-center gap-3">
                <TfiEmail className="w-[1.8rem] h-[1.8rem] text-white flex-shrink-0" />
                <a
                  className="font-Roboto font-normal leading-normal text-gray-400"
                  href="mailto:tanul@unarrow.com"
                >
                  tanul@unarrow.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-white">
                <IoCall className="w-[1.8rem] h-[1.8rem] text-white flex-shrink-0" />
                <a
                  className="font-Roboto font-normal leading-normal text-gray-400"
                  href="tel:+91 8433700215"
                >
                  +91 8433700215
                </a>
              </div>

              <div className="flex items-center gap-3 text-white">
                <IoCall className="w-[1.8rem] h-[1.8rem] text-white flex-shrink-0" />
                <a
                  className="font-Roboto font-normal leading-normal text-gray-400"
                  href="tel:+91 8433700215"
                >
                  +91 8433700215
                </a>
              </div>
            </div>

            <form
              className="text-white font-Roboto md:w-[50%] lg:w-[65%] mt-10"
              onSubmit={formDataHandler}
            >
              <div className="flex flex-col lg:flex-row gap-20">
                <label className="w-full">
                  NAME
                  <br />
                  <input
                    className="mt-2 bg-transparent mb-1 focus:outline-none"
                    type="text"
                    required
                    placeholder="First Name"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                 <div className="w-full">
                 <hr />
                 </div>
                </label>

                <label className="w-full">
                  <input
                    className="mt-8 bg-transparent mb-1 focus:outline-none"
                    type="text"
                    required
                    placeholder="Last Name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  <div className="w-full">
                 <hr />
                 </div>
                </label>
              </div>

              <div className="flex flex-col lg:flex-row w-full gap-20">
                <label className="mt-6 w-full">
                  EMAIL ADDRESS
                  <br />
                  <input
                    className="bg-transparent mt-2 mb-1 focus:outline-none"
                    type="email"
                    placeholder="tanul@unarrow.com"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="w-full">
                 <hr />
                 </div>
                </label>

                <label className="mt-6 w-full">
                  PHONE
                  <br />
                  <input
                    className="bg-transparent mt-2 mb-1 focus:outline-none"
                    type="text"
                    required
                    placeholder="+91"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div className="w-full">
                 <hr />
                 </div>
                </label>
              </div>

              <div className="mt-6">
                <label className="w-full">
                  MESSAGE
                  <br />
                  <textarea rows={1} 
                    className="bg-transparent w-full mt-2 mb-1 focus:outline-none"
                    name="message"
                    required
                    placeholder="Type your Message......"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                   <div className="w-full -mt-1">
                 <hr />
                 </div>
                </label>
              </div>

              <CustomButton
                label={"SUBMIT"}
                className={"rounded-lg mt-5 md:w-full"}
              />
            </form>
          </div>
        </div>
      </div>

      <CardSlider />
    </>
  );
};

export default Contact;
