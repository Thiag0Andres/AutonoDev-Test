import React from "react";

//Component
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import About from "../../components/About";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Menu />
      <About />
      <Footer />
    </>
  );
};

export default Home;
