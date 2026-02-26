import React from 'react'

const Bseller = ({ Image, title, price, Rating, icon1, icon2, price2 }) => {
  return (
    <div>
           <div className="relative w-75  h-115 p-1 flex flex-col justify-between items-center">
        <img
          src={icon1}
          alt=" heart"
          className="absolute left-3   p-2 rounded-full w-8 h-8"
        />
        <img
          src={icon2}
          alt="sale pic"
          className="absolute bottom-105 left-2  p-2  ml-65 rounded-full w-12 h-12 object-cover"
        />
        <img src={Image} alt="books pic" className="w-full " />
        <div className="leading-loose">
          <h1 className="font-bold px-2">{title}</h1>
          <img className="ml-4" src={Rating} alt="" />

          <div className="flex items-center ml-4 gap-3 px-8 py-2">
            <span className="  line-through text-xl"> {price2} </span>
            <span className=" font-bold text-2xl "> {price} </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bseller