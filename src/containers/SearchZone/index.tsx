import React from "react";

//Component
import NavBar from "../../components/NavBar";
import SearchAndMap from "../../components/SearchAndMap";
//import MessageModal from "../../components/MessageModal";

const SearchZone: React.FC = () => {
  return (
    <>
      <NavBar />
      <SearchAndMap />
    </>
  );
};

export default SearchZone;
