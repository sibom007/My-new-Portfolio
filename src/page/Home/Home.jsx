import Aboutme from "./Aboutme/Aboutme";
import Banner from "./Banner/Banner";
import Skills from "./Skills/Skills";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#e9defa] to-[#fbfcdb] ">
      <Banner />
      <Aboutme />
      <Skills />
    </div>
  );
};

export default Home;
