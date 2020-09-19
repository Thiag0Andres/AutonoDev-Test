import React from "react";

//Component
import NavBar from "../../components/NavBar";
import SearchAndMap from "../../components/SearchAndMap";
import Footer from "../../components/Footer";

const SearchZone: React.FC = () => {
  return (
    <>
      <NavBar />
      <SearchAndMap />
      <Footer />
    </>
  );
};

export default SearchZone;
