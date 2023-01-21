import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="md:mt-[51px] mt-[62px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
