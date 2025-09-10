import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Root = () => {
  return (
    <div>
      <h2>Welcome to our app</h2>
      <Navigation/>

      {/* Child components render here */}
      <Outlet />
    </div>
  );
};

export default Root;
