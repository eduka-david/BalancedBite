import React from "react";
import BodyFuel from "../image/BodyFuel.jpg";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <img
            src={BodyFuel}
            alt="Background"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
