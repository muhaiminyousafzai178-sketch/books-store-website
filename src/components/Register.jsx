import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen w-full flex pt-20 pl-40 bg-gray-600">
      <div className="bg-amber-400 w-120 h-110">
        <img
          src="/Rectangle 4 (2).png"
          alt="pic"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-120 h-110 bg-white">
        <h1 className="ml-17 mt-8 font-bold text-3xl">Welcome to Mr Book</h1>
        <h1 className="pl-17">
          Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Sed,
          voluptas?
        </h1>
        {/*  names wala inputs  */}
        <form action="">
          <div className="px-8 py-4 flex gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm 
               focus:border-black focus:ring-2 focus:ring-black outline-none transition"
            />

            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm 
               focus:border-black focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>
          {/* email wala input  */}
          <div>
            <input
              type="text"
              placeholder="Email "
              className="w-105 border border-gray-300 rounded-xl  ml-8 p-3 py-3 shadow-sm 
               focus:border-black focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>
          {/* password wala input */}
          <div className="px-8 py-4 flex gap-4">
            <input
              type="text"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm 
               focus:border-black focus:ring-2 focus:ring-black outline-none transition"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-xl px-4  py-3 shadow-sm 
               focus:border-black focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          <div>
            <button
              className="bg-yellow-500 w-105  text-white px-6 py-3 ml-8 active:scale-95 rounded-xl font-semibold 
                   hover:bg-gray-800 transition duration-300 shadow-md"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="ml-30 py-3">
          <h1>
            Already have an account?{" "}
            <button className="text-yellow-400 cursor-pointer">
              login
            </button>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
