import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import h1 from "../../../../public/project photo 3.jpg";

const Aboutme = () => {
  return (
    <div className="bg-[#eaedf2] mt-32">
      <h1
        className="ml-12 text-3xl font-bold pt-16"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        About Me
      </h1>
      <div className=" w-10 ml-12 -mt-2 text-yellow-500 text-3xl">---</div>
      <p className="ml-12  font-bold">No one is perfect</p>
      <div className="md:flex">
        <div>
          <div className="p-12 relative">
            <img
              className="w-80 -mt-9  border-[20px] border-white rounded"
              src={h1}
              alt=""
            />
          </div>
          {/* icom 1 */}
          <div className="absolute -bottom-[212px] ml-16 bg-orange-400 p-1 border-8 border-white hover:bg-black duration-500">
            <a href="https://www.linkedin.com/in/sibom-saha-4b1a9727b/">
              <AiOutlineLinkedin className="text-2xl" />
            </a>
          </div>
          {/* icom 2 */}
          <div className="absolute -bottom-64 ml-16 bg-orange-400 p-1 border-8 border-white hover:bg-black duration-500">
            <a href="https://web.facebook.com/?_rdc=1&_rdr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          {/* icom 3 */}
          <div className="absolute -bottom-[300px] ml-16 bg-orange-400 p-1 border-8 border-white hover:bg-black duration-500">
            <a href="https://github.com/sibom007">
              <AiOutlineGithub className="text-2xl" />
            </a>
          </div>
        </div>
        {/* text */}
        <div
          className="ml-10 md:mt-20 space-y-5"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="text-2xl font-bold">I'M Sibom saha</h1>
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
            className="btn btn-outline btn-warning"
          >
            <button className="text-black">My Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
