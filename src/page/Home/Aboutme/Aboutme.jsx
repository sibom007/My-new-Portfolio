import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./About.css";

const Aboutme = () => {
  return (
    <div className="mt-32 text-black">
      <div className="lg:text-center xl:text-center 2xl:text-center ">
        {" "}
        <h1
          className="lg:ml-12 xl:ml-12 2xl:ml-12 ml-5 text-3xl  font-bold pt-16"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          About Me <br />
          ------------------
        </h1>
        <p className="ml-12 md:mb-5 font-bold">No one is perfect</p>
      </div>
      <div className="xl:flex lg:flex xl:px-40">
        <div className="lg:block xl:block 2xl:block hidden">
          {" "}
          <div className="bode ml-[50px] mt-[120px] "></div>
        </div>

        {/* text */}
        <div
          className="lg:mt-[180px] 2xl:ml-[230px] xl:ml-[100px] xl:text-3xl lg:ml-[50px] lg:text-4xl  md:text-3xl md:ml-5 ml-5 text-2xl"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1>I'M Sibom saha</h1>
          <h4 className="font-semibold">
            I am a <span className="text-orange-400">UI & MERN-Stack </span>
            devloper based in Bangladesh
          </h4>
          <p>
            I successfully achieved specific results or accomplishments,
            demonstrating <br />
            my ability to Last 6 months I complete a Course i work Really hard
          </p>
          <p>
            <span className="font-semibold">Birthday</span> : 3/3/2006
          </p>
          <p>
            <span className="font-semibold">Age</span> : 18
          </p>
          <p>
            <span className="font-semibold">Residence</span> : Bangladesh
          </p>
          <Link
            to={
              "https://drive.google.com/file/d/1rpOxOqBNppM_AlaNMV6j1ArajY4jO1Jt/view?usp=drive_link"
            }
          >
            <button className="flex mt-5 items-center space-x-2 text-2xl border-4 rounded-md p-2 border-white border-opacity-25 shadow-md hover:bg-slate-400 hover:bg-opacity-20 duration-500">
              My Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
