import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header/>
      <NavBar />      
      <Footer/>
    </div>
  );
};

export default Home;
