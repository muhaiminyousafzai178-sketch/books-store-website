import React from "react";
import { MoveRight, MoveLeft } from "lucide-react";

const Best = () => {
  return (
    <div className="flex items-center  justify-between px-5">
      <h1 className="font-bold  mt-10 px-5  text-2xl">Our Best Seller</h1>

      <div className="flex p-3 gap-4 mt-10 ">
        <MoveLeft size={40} strokeWidth={3} />
        <MoveRight
          size={40}
          strokeWidth={3}
          className="bg-yellow-400 rounded-3xl text-white p-1"
        />
      </div>
    </div>
  );
};

export default Best;
