import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";


const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header/>
      <NavBar />      
    </div>
  );
};

export default Home;
