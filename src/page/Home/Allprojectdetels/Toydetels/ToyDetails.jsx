import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper";
import s1 from "../../../../../public/Toy project photo/Screenshot (105).png";
import s2 from "../../../../../public/Toy project photo/Screenshot (106).png";
import s3 from "../../../../../public/Toy project photo/Screenshot (107).png";
import s4 from "../../../../../public/Toy project photo/Screenshot (108).png";
import s5 from "../../../../../public/Toy project photo/Screenshot (109).png";
import s6 from "../../../../../public/Toy project photo/Screenshot (110).png";
import s7 from "../../../../../public/Toy project photo/Screenshot (111).png";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const ToyDetails = () => {
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
        modules={[EffectCreative, Autoplay]}
        className="mySwiper"
        Autoplay
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
          <span className="text-3xl font-bold">Project</span> :Toy world
        </h1>
        <p className="font-semibold">
          Overview : Project name :Toy-World on the website [MERN-Stack Project]
          Devlopment the website private route, user login ,Scroll down view the
          Toy tabs, Then add toy section you can add your toy Then all toy
          section You can see Which toy you add
        </p>
        <ul className="flex space-x-6 md:ml-[400px] mt-6">
          <Link to={"https://toy-world-35e1d.web.app/"}>
            <span className="flex text-blue-500">
              {" "}
              <AiOutlineLink className="text-3xl" /> Live Link
            </span>
          </Link>
          <Link to={"https://github.com/sibom007/toy-marketplace-client-side"}>
            <span className="flex text-blue-500">
              {" "}
              <AiOutlineGithub className="text-3xl" />
              clint side
            </span>
          </Link>
          <Link to={"https://github.com/sibom007/toy-marketplace-server-side"}>
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

export default ToyDetails;
