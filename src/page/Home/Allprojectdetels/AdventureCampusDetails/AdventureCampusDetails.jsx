import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import s1 from "../../../../../public/Adventure Campus project photo/Screenshot (118).png";
import s2 from "../../../../../public/Adventure Campus project photo/Screenshot (119).png";
import s3 from "../../../../../public/Adventure Campus project photo/Screenshot (120).png";
import s4 from "../../../../../public/Adventure Campus project photo/Screenshot (121).png";
import s5 from "../../../../../public/Adventure Campus project photo/Screenshot (122).png";
import s6 from "../../../../../public/Adventure Campus project photo/Screenshot (123).png";
import s7 from "../../../../../public/Adventure Campus project photo/Screenshot (124).png";

const AdventureCampusDetails = () => {
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
        <SwiperSlide>
          <img src={s7} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="text-center">
        <h1 className="text-2xl">
          <span className="text-3xl font-bold">Project</span> : Adventure Campus
        </h1>
        <p className="font-semibold">
          Overview : Devlopment the website private route, user login ,Scroll
          down view the top class and EnRoll Button you can not Enroll with out
          Log in and update class data .
        </p>
        <ul className="flex space-x-6 md:ml-[400px] mt-6">
          <Link to={"https://assiment-12.web.app/"}>
            <span className="flex text-blue-500">
              {" "}
              <AiOutlineLink className="text-3xl" /> Live Link
            </span>
          </Link>
          <Link to={"https://github.com/sibom007/camp-client-side"}>
            <span className="flex text-blue-500">
              {" "}
              <AiOutlineGithub className="text-3xl" />
              clint side
            </span>
          </Link>
          <Link to={"https://github.com/sibom007/summer-camp-server_side"}>
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

export default AdventureCampusDetails;
