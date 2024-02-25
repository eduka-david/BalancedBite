import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import BodyFuel from "../image/BodyFuel.jpg";
import BalancedBite from "../image/BalancedBite.jpg";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Calculator from "./calculator";
import ReactDOM from "react-dom";
import App from "./App.js";

const NavBar = ({ setActivePage }) => {
  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="bg-emerald-950 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-2xl font-sans">
            Balanced Bite
          </h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <button
              className="text-white hover:text-rose-600"
              onClick={() => handleNavClick("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="text-white hover:text-rose-600"
              onClick={() => handleNavClick("menu")}
            >
              Menu
            </button>
          </li>
          <li>
            <button
              className="text-white hover:text-rose-600"
              onClick={() => handleNavClick("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="text-white hover:text-rose-600"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </li>
          <li>
            <button
              className="text-white hover:text-rose-600"
              onClick={() => handleNavClick("calculate")}
            >
              Calculate BMR
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const MenuItem = ({ name, image, description, price, orderLink }) => {
  const handleOrderClick = () => {
    window.location.href = orderLink;
  };

  return (
    <div className="order p-4 mb-4 ">
      <div className="bg-white rounded-lg shadow-lg h-800 flex flex-col">
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <img
            src="./image/BodyFuel.jpg"
            alt={name}
            className="mb-2"
            width={300}
            height={200}
          />

          <p className="mb-2">{description}</p>
          <p className="text-gray-700 font-bold">${price}</p>
        </div>
        <div className="flex justify-center p-4">
          <button
            className="bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleOrderClick}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
const Menu = () => {
  const menuItems = [
    {
      name: "BalancedBite",
      image: BalancedBite,
      description:
        "Classic diet containing balanced proportions of protein, carbohydrates and healthy fats - occurs in calories from 1000 to 2500 kcal",
      price: 9.99,
      orderLink: "https://gangabox.mobilnycatering.pl/230/241",
    },

    {
      name: "BodyFuel",
      image: BodyFuel,
      description:
        "Diet with increased calorific value and amount of protein - dedicated to active people",
      price: 12.99,
      orderLink: "https://gangabox.mobilnycatering.pl/230/234",
    },
    {
      name: "HealthyHarvest",
      image: BodyFuel,
      description:
        "Diet without meat with increased amount of protein of plant origin, containing animal products such as dairy products or eggs",
      price: 9.99,
      orderLink: "https://gangabox.mobilnycatering.pl/230/236",
    },
    {
      name: "WellFed Wellness",
      image: "../image/BodyFuel.jpg",
      description:
        "A diet based on proteins and fats, eliminating almost completely carbohydrates.",
      price: 9.99,
      orderLink: "https://gangabox.mobilnycatering.pl/230/239",
    },
    {
      name: "Cheeseburger",
      image: BodyFuel,
      description: "Delicious beef patty with melted cheese on a toasted bun.",
      price: 9.99,
    },
    {
      name: "Cheeseburger",
      image: BodyFuel,
      description: "Delicious beef patty with melted cheese on a toasted bun.",
      price: 9.99,
    },
    {
      name: "Cheeseburger",
      image: BodyFuel,
      description: "Delicious beef patty with melted cheese on a toasted bun.",
      price: 9.99,
    },
    {
      name: "Cheeseburger",
      image: BodyFuel,
      description: "Delicious beef patty with melted cheese on a toasted bun.",
      price: 9.99,
    },
    // Add more menu items here
  ];
  const textFrames = [
    "Balanced Bite",
    "Explore our delicious menu",
    "Balanced Bite: Where Taste Meets Nutrition, Unforgettable Culinary Delights.",
    "Place your order today",
  ];

  // State to track the current text frame
  const [currentFrame, setCurrentFrame] = useState(0);

  // Function to update the current text frame every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % textFrames.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto py-8 px-4 bg-gray-200">
      <div className="flex items-center justify-around mb-6">
        <div className="p-4 bg-white rounded-lg shadow-lg w-80 h-40">
          <h3 className="text-xl font-bold flex items-center justify-center h-full">
            {textFrames[currentFrame]}
          </h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          <img
            src={BalancedBite}
            alt="Banner"
            className="h-40 w-40 rounded-full"
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">Menu</h1>
      <div
        className="menu-container"
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          animation: "scroll 60s linear infinite",
        }}
      >
        <div className="flex flex-row">
          {menuItems.map((item, index) => (
            <div
              className="menu-item"
              style={{
                width: "300px",
                marginRight: "16px" /*flex: "0 0 300px"*/,
              }}
              key={index}
            >
              <div style={{ height: "100%" }}>
                <MenuItem
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  orderLink={item.orderLink}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
