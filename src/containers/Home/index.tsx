import React from "react";

//Component
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import About from "../../components/About";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Menu />
      <About />
    </>
  );
};

export default Home;
