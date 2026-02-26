import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Sale from "./components/sale";
import Home from "./components/Home";
import New from "./components/New";
import Register from "./components/Register";
import Longin from "./components/Longin";
import Newproducts from "./components/New-products";
import Best from "./components/Best";
import Bseller from "./components/Bseller";
import About from "./components/About";

const App = () => {
  let data = [
    {
      Image: "Rectangle 24.png",
       title: (
      < >
        I Survived The Battle <br/> <span className="ml-10">of 1994</span>
      </>
    ),
      Rating: "Group 30.png",
      price: "$79",
      price2: "$120",
      icon1: "Vector.png",
      icon2: "sale.png",
    },
       {
      Image: "/Rectangle 25.png",
         title: (
      < >
        I Survived The Battle <br/> <span className="ml-10">of 1994</span>
      </>),
      Rating: "Group 30.png",
      price: "$79",
      price2: "$120",
      icon1: "Vector.png",
      icon2: "sale.png",
    },
       {
      Image: "Rectangle 26.png",
              title: (
      < >
        I Survived The Battle <br/> <span className="ml-10">of 1994</span>
      </>),
      Rating: "Group 30.png",
      price: "$79",
      price2: "$120",
      icon1: "Vector.png",
      icon2: "sale.png",
    },
       {
      Image: "Rectangle 23.png",
              title: (
      < >
        I Survived The Battle <br/> <span className="ml-10">of 1994</span>
      </>),
      Rating: "Group 30.png",
      price: "$79",
      price2: "$120",
      icon1: "Vector.png",
      icon2: "sale.png",
    },
  ];
     const data2 = [
  {
    Image: "books (2).png",
    title: (
      <>
        I Survived The Battle <br /> <span className="ml-10">of 2000</span>
      </>
    ),
    Rating: "Group 30.png",
    price: "$59",
    price2: "$100",
    icon1: "Vector.png",
    icon2: "sale.png",
  },

    {
    Image: "books (3).png",
    title: (
      <>
        I Survived The Battle <br /> <span className="ml-10">of 2000</span>
      </>
    ),
    Rating: "Group 30.png",
    price: "$59",
    price2: "$100",
    icon1: "Vector.png",
    icon2: "sale.png",
  },

    {
    Image: "Rectangle 26.png",
    title: (
      <>
        I Survived The Battle <br /> <span className="ml-10">of 2000</span>
      </>
    ),
    Rating: "Group 30.png",
    price: "$59",
    price2: "$100",
    icon1: "Vector.png",
    icon2: "sale.png",
  },

    {
    Image: "Rectangle 24.png",
    title: (
      <>
        I Survived The Battle <br /> <span className="ml-10">of 2000</span>
      </>
    ),
    Rating: "Group 30.png",
    price: "$59",
    price2: "$100",
    icon1: "Vector.png",
    icon2: "sale.png",
  },
];
     
  return (
    <div>
       <Navbar />
       <Hero /> 
       <Menu /> 
      <Sale /> 
    
       <div className="flex justify-between px-5">
         {data.map((elem, idx) => { 
       return (
        <Home
            key={idx}
            Image={elem.Image}
          title={elem.title}
          Rating={elem.Rating}
           price={elem.price}
           icon1={elem.icon1}
           icon2={elem.icon2}
           price2={elem.price2}
         />
       );
     })}
     </div> 

       <New/> 

          <div className="flex justify-between px-5">
        {data.map((elem, idx) => {
       return (
         <Newproducts
           key={idx}
        Image={elem.Image}
           title={elem.title}
           Rating={elem.Rating}
           price={elem.price}
           icon1={elem.icon1}
         icon2={elem.icon2}
           price2={elem.price2}
       />
        );
     })}
       </div>
        <Best/> */
        
      
         <div className="flex justify-between px-5">
        {data2.map((elem, idx) => {
       return (
         <Bseller
           key={idx}
           Image={elem.Image}
           title={elem.title}
           Rating={elem.Rating}
           price={elem.price}
           icon1={elem.icon1}
           icon2={elem.icon2}
           price2={elem.price2}
           />
        );
      })}
      </div>
       
         {/* <Register/>    */}
       {/* <Longin/> */}
       <About/>
    </div>
    
  );
};

export default App;
