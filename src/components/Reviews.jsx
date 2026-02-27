import React from "react";

const Reviews = ({ name, image, text }) => {
  return (
    <div className=" h-75 w-90 relative flex flex-col justify-center items-center p-5 mt-30 shadow-[0_8px_30px_rgba(0,0,0,0.20)]">
      <div>
    <div className="flex justify-center items-center absolute bottom-65 left-30 "><img src={image} alt="" /></div>
        <div className="flex flex-col justify-center items-center">
            <h1>{name }</h1>
            <img src="/Group 30.png" alt="" />

        </div>
        <div className="flex justify-center items-center">
            <p className="text-justify ">{ text}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
