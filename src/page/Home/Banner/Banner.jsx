import React from "react";
import { FaGithubAlt,FaFacebook,FaLinkedin,FaReadme } from "react-icons/fa6";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="grid xl:grid-cols-2 space-x-52 text-black xl:px-11 lg:space-x-10 lg:px-2 lg:gap-36 md:grid-cols-1 md:px-6 md:space-x-0 md:gap-0  sm:space-x-3 sm:grid-cols-1 2xl:ml-52">
      <div className="space-y-3 md:mt-5 sm:mt-3 xl:mt-[250px]">
        <h1 className="xl:text-3xl font-semibold  sm:text-center md:text-center">Hello Everyone</h1>
        <h1 className="xl:text-6xl sm:text-4xl font-bold  sm:text-center md:text-center">I am Sibom saha</h1>
        <h1 className="xl:text-2xl md:text-center  sm:text-center">Full stack developer</h1>
       
        <ul className=" grid grid-cols-2  gap-7 px-5">
          <Link className="flex items-center space-x-2 text-2xl border-4 rounded-md p-2 border-white border-opacity-25 shadow-md hover:bg-slate-400 hover:bg-opacity-20 duration-500"><FaGithubAlt /><span>GitHub</span></Link>
          <Link className="flex items-center space-x-2 text-2xl border-4 rounded-md p-2 border-white border-opacity-25 shadow-md hover:bg-slate-400 hover:bg-opacity-20 duration-500"><FaFacebook /><span>Facebook</span></Link>
          <Link className="flex items-center space-x-2 text-2xl border-4 rounded-md p-2 border-white border-opacity-25 shadow-md hover:bg-slate-400 hover:bg-opacity-20 duration-500"><FaLinkedin /><span>Linkedin</span></Link>
          <button className="flex items-center space-x-2 text-2xl border-4 rounded-md p-2 border-white border-opacity-25 shadow-md hover:bg-slate-400 hover:bg-opacity-20 duration-500"><FaReadme /><span>Resume</span></button>
        </ul>
      </div>
      <div className="bode mt-10 ">
     
      </div>
    </div>
  );
};

export default Banner;
