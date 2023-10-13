import React from "react";
import project2 from "../../../../public/my project 2.jpg";
import "./Skill.css";
const Skills = () => {
  return (
    <div className="text-black">
      <div className=" text-center text-3xl">
        <h1 className="text-3xl font-bold pt-16">
          MY SKILLS <br /> ---------------------
        </h1>

        <h4 className="font-semibold">
          I am a <span className="text-orange-400">UI & MERN-Stack </span>
          devloper based in Bangladesh
        </h4>
      </div>

      <div className="skill w-9/12 mx-auto border-4 border-black border-opacity-25 rounded-md p-4 space-y-5 text-3xl">
        <ul className="space-y-5">
          <li>
            <h1>Html</h1>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          <li>
            <h1>CSS</h1>
            <span className="bar">
              <span className="css"></span>
            </span>
          </li>
          <li>
            <h1>java script</h1>
            <span className="bar">
              <span className="javascript"></span>
            </span>
          </li>
          <li>
            <h1>React js</h1>
            <span className="bar">
              <span className="reactjs"></span>
            </span>
          </li>
          <li>
            <h1>Next js</h1>
            <span className="bar">
              <span className="nextjs"></span>
            </span>
          </li>
        </ul>
        <ul className="space-y-5">
          <li>
            <h1>Mongodb</h1>
            <span className="bar">
              <span className="mongodb"></span>
            </span>
          </li>
          <li>
            <h1>Vercel</h1>
            <span className="bar">
              <span className="vercel"></span>
            </span>
          </li>
          <li>
            <h1>Github</h1>
            <span className="bar">
              <span className="github"></span>
            </span>
          </li>
          <li>
            <h1>Tailwind css</h1>
            <span className="bar">
              <span className="tailwindcss"></span>
            </span>
          </li>
          <li>
            <h1>Bootstrap</h1>
            <span className="bar">
              <span className="bootstrap"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
