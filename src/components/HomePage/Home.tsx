"use client"; // This is a client component 👈🏽

import React from "react";
import Body from "./Body/Body";
interface Props {}
const HomePage: React.FC<Props> = ({}) => {
  return (
    <div className="w-full">
      <Body />
    </div>
  );
};
export default HomePage;
