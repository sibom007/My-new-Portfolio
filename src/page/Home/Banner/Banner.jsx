import React from "react";
import Banners from "../../../../public/Banner1.jpg";
import banner2 from "../../../../public/project photo 3.jpg";

const Banner = () => {
  return (
    <div>
      <div className="md:h-[480px] relative">
        <img src={Banners} alt="" />
      </div>
      {/* not res */}
      <div className="avatar md:block hidden">
        <div
          className="w-72 rounded-full absolute -top-80 ml-9"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={banner2} />
        </div>
      </div>
      {/* res */}
      <div className="avatar md:hidden block">
        <div
          className="w-24 rounded-full absolute -top-40"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={banner2} />
        </div>
      </div>
      {/* text not res */}
      <div className="md:block hidden">
        <h1
          className="text-center md:text-7xl font-bold absolute md:top-72 -top-[420px] md:ml-[360px] mt-6 text-blue-200"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Hello Welcome to <br /> my Portfolio
        </h1>
      </div>
      {/* text res */}
      <div className="md:hidden block">
        <h1
          className="text-center text-3xl font-bold absolute top-32 ml-36 -mt-4  text-blue-200"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Hello Welcome to <br /> my Portfolio
        </h1>
      </div>
    </div>
  );
};

export default Banner;
