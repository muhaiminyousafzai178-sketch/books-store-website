import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex ">
        <div className=" p-5  object-cover bg-amber-500 w-150  ">
          <h1 className="p-5 mt-12 ml-3 font-bold text-3xl">About US</h1>
          <img src="/Rectangle 364.png" alt="about pic" />
        </div>
        <div className="bg-blue-500 w-150">
          <h1 className="pt-60 pl-20 text-yellow-600">ABOUT US</h1>
          <p className="pl-20 text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quos quam aut culpa veritatis consectetur?
          </p>
          <p className="pl-20 pt-3">
            Lorem ipsum dolor sit amet consectetur. Pulvinar at urna ridiculus
            nec volutpat dis eget tellus elementum. Justo mauris eu morbi
            suscipit amet adipiscing tristique. Pulvinar lorem scelerisque enim
            morbi nibh convallis semper tempus dui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
