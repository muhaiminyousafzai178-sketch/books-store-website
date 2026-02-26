import React from "react";
import { MoveRight,MoveLeft } from "lucide-react";

const Sale = () => {
  return (
    <div>
      <div className="flex items-center  justify-between px-5 ">
  <h1 className="text-2xl font-bold">Sale products</h1>
  <div className="flex gap-2 p-1  ">
     <MoveLeft size={40} strokeWidth={3}/>
    <MoveRight size={40} strokeWidth={3} className="bg-yellow-400 rounded-3xl text-white"  />
   
  </div>
</div>
    </div>
  );
};

export default Sale;
