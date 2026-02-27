import React from "react";

const Longin = () => {
  return (
    
    <div className="w-screen h-screen bg-gray-400">
      
      <div className="pt-15 pl-40 flex ">
        <div className=" w-120 h-120 ">
          <img
            src="/Rectangle 4 (1).png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className=" w-120 h-120 bg-white  ">
          <h1 className="font-bold text-2xl pl-20 pt-8">
            Welcome back to Mr Book
          </h1>
          <p className="pl-20">
            Lorem ipsum dolor sit adipisicing elit. Quidem, <br />  adipisci.
          </p>

          <form className="flex flex-col gap-5 w-full max-w-md pl-20 pt-5">
            <div className="flex flex-col gap-2 w-90">
              <label className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-xl px-4 py-3 
                 outline-none focus:ring-2 focus:ring-yellow-500 
                 focus:border-yellow-500 transition shadow-sm "
              />
            </div>

            <div className="flex flex-col gap-2 w-90">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-xl px-4 py-3 
                 outline-none focus:ring-2 focus:ring-yellow-500 
                 focus:border-yellow-500 transition shadow-sm"
              />
            </div>

            <button
              className="bg-yellow-500 text-white py-3 rounded-xl font-semibold
               hover:bg-yellow-600 active:scale-95 transition duration-300 shadow-md"
            >
              Login
            </button>
          </form>
          <h1 className="pl-35 pt-5">Don’t have an account? <button className="text-yellow-400"> Register?</button></h1>
        </div>
      </div>
    </div>
  );
};

export default Longin;
