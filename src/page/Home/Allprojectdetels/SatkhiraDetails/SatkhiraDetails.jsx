import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import s1 from "../../../../../public/Satkhira project photo/Screenshot (112).png";
import s2 from "../../../../../public/Satkhira project photo/Screenshot (113).png";
import s3 from "../../../../../public/Satkhira project photo/Screenshot (114).png";
import s4 from "../../../../../public/Satkhira project photo/Screenshot (115).png";
import s5 from "../../../../../public/Satkhira project photo/Screenshot (116).png";
import s6 from "../../../../../public/Satkhira project photo/Screenshot (117).png";

const SatkhiraDetails = () => {
  return (
    <div>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={s1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s6} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="text-center">
        <h1 className="text-2xl">
          <span className="text-3xl font-bold">Project</span> :Satkhira
        </h1>
        <p className="font-semibold">
          Overview : Devlopment the website private route, user login ,Scroll
          down view the Indian Top Six Chef Click on view button If you Log in
          then see the chef Recipes or not Log in then Log in First Then the Log
          in and Sign in
        </p>
        <ul className="flex space-x-6 md:ml-[400px] mt-6">
          <Link to={"https://inner-grove-383305.web.app/"}>
            <span className="flex text-blue-500">
              {" "}
              <AiOutlineLink className="text-3xl" /> Live Link
            </span>
          </Link>
          <Link
            to={"https://github.com/sibom007/chef-recipe-hunter-client-side"}
          >
            <span className="flex text-blue-500">
              {" "}
              <AiOutlineGithub className="text-3xl" />
              clint side
            </span>
          </Link>
          <Link
            to={"https://github.com/sibom007/chef-recipe-hunter-server-side"}
          >
            <span className="flex text-blue-500">
              {" "}
              <AiOutlineGithub className="text-3xl" />
              server side
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SatkhiraDetails;
