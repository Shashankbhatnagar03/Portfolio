import React from "react";
import { socials } from "../data";
import { Vortex } from "./ui/Vortex";
import Links from "./Links";

function Contact() {
  return (
    <div
      className="w-[calc(100%)] rounded-md  h-[30rem] overflow-hidden pt-10 mt-10 "
      id="contact"
    >
      <Vortex className="flex items-center flex-col justify-center py-4 w-full h-full ">
        <h2 className="text-white px-2  md:px-10  text-2xl md:text-6xl font-bold text-center">
          Wanna <span className="text-purple">Connect ?</span>
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Join me on my social and coding adventures:
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <div className="hidden md:block">
            <Links />
          </div>
          <div className="block md:hidden">
            <div className="flex justify-center items-center my-10">
              {socials.map((social, index) => (
                <div
                  key={index}
                  className="border border-red-200/[.2] rounded-full lg:w-14 lg:h-14 w-10 h-10 flex justify-center items-center overflow-hidden bg-red-100 mx-2 sm:mx-3 hover:bg-purple-500 hover:scale-110 transition duration-300 ease-in-out relative"
                >
                  <a
                    href={social.link}
                    target="_blank"
                    className="sm:max-w-[90%]"
                  >
                    <img src={social.icon} alt="icon" className="p-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
}

export default Contact;
