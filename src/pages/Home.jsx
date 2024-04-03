import { useState, useEffect } from "react";
import MainVid from "../assets/video/main.mp4";
import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";
import BannerImg from "../components/BannerImg/BannerImg";
import Blogs from "./Blogs";
import Banner1 from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial";
import Popup from "../components/Popup/Popup.jsx";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handlerOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div > 
        <div className="h-[700px] relative ">
        <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={MainVid} type="video/mp4" />
          </video>
          <Hero/>
        </div>
        <Places handlerOrderPopup={handlerOrderPopup}/>
        <BannerImg img={Banner1}/>
        <Blogs/>
        <Banner/>
        <BannerImg img={Banner2}/>
        <Testimonial/>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      </div>
    </>
  );
};

export default Home;
