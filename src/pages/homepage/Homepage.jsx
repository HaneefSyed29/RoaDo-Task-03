import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Banner from "./components/Banner";
import Table from "./components/TableContent";
import Graph from "./components/Graph";
import Cards from "./components/Cards";

const Homepage = () => {
  return (
    // this is the layout of the Homepage and then we are using Component in the same
    <div className="flex">
      <Sidebar />
      <div className="bg-slate-50 w-full">
        <Navbar />
        <Banner />
        <Cards />
        <Graph />
        <Table />
      </div>
    </div>
  );
};

export default Homepage;
