import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";


const Layout = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handlerOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handlerOrderPopup={handlerOrderPopup}/>
      <Outlet/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </>
  )
}

export default Layout