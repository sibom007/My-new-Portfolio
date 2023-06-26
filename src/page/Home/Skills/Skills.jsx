import React from "react";
import project2 from "../../../../public/my project 2.jpg";

const Skills = () => {
  return (
    <div
      className="md:ml-24 md:flex md:space-x-7 "
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="ml-4">
        <h1 className="text-3xl font-bold pt-16">MY SKILLS</h1>
        <div className="w-10 -mt-2 text-yellow-500 text-3xl">---</div>
        <h4 className="font-semibold">
          I am a <span className="text-orange-400">UI & MERN-Stack </span>
          devloper based in Bangladesh
        </h4>
        {/* Html */}
        <div
          className="md:ml-10"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <ul className="flex md:space-x-72 space-x-[180px]">
            <li>HTML</li>
            <li>92%</li>
          </ul>
          <progress
            className="progress progress-warning md:w-96 w-64"
            value="92"
            max="100"
          ></progress>
        </div>
        {/* css */}
        <div
          className="md:ml-10 mt-5"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <ul className="flex md:space-x-56 space-x-32">
            <li>CSS</li>
            <li>70%</li>
          </ul>
          <progress
            className="progress progress-warning md:w-96 w-64"
            value="70"
            max="100"
          ></progress>
        </div>
        {/* Java script
         */}
        <div
          className="md:ml-10 mt-5"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <ul className="flex md:space-x-24 space-x-11">
            <li>Java script</li>
            <li>50%</li>
          </ul>
          <progress
            className="progress progress-warning md:w-96 w-64"
            value="50"
            max="100"
          ></progress>
        </div>
        {/* Firebase Authentication */}
        <div
          className="md:ml-10 mt-5"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <ul className="flex md:space-x-36 space-x-10">
            <li>Firebase Authentication</li>
            <li>89%</li>
          </ul>
          <progress
            className="progress progress-warning md:w-96 w-64"
            value="89"
            max="100"
          ></progress>
        </div>
      </div>
      {/* Photo */}
      <div>
        <img className="w-[490px] h-[350px] md:mt-20" src={project2} alt="" />
      </div>
    </div>
  );
};

export default Skills;
