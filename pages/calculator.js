import React, { useState } from "react";

const Calculator = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmr, setBMR] = useState(0);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(Number(event.target.value));
  };

  const handleWeightChange = (event) => {
    setWeight(Number(event.target.value));
  };

  const handleHeightChange = (event) => {
    setHeight(Number(event.target.value));
  };

  const calculateBMR = () => {
    let bmr = 0;
    if (gender === "male") {
      bmr = 66 + 6.23 * weight + 12.7 * height - 6.8 * age;
    } else if (gender === "female") {
      bmr = 655 + 4.35 * weight + 4.7 * height - 4.7 * age;
    }
    setBMR(bmr);
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          Basal Metabolic Rate (BMR) Calculator
        </h1>
        <div className="flex items-center mb-4">
          <label htmlFor="gender" className="mr-4">
            Gender:
          </label>
          <select
            id="gender"
            value={gender}
            onChange={handleGenderChange}
            className="border rounded-md px-2 py-1"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="age" className="mr-4">
            Age:
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
            className="border rounded-md px-2 py-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="weight" className="mr-4">
            Weight (kg):
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={handleWeightChange}
            className="border rounded-md px-2 py-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="height" className="mr-4">
            Height (cm):
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={handleHeightChange}
            className="border rounded-md px-2 py-1"
          />
        </div>
        <button
          className="bg-rose-500 text-white px-4 py-2 rounded-lg"
          onClick={calculateBMR}
        >
          Calculate BMR
        </button>
        {bmr > 0 && (
          <p className="mt-4">
            Your Basal Metabolic Rate (BMR) is: {bmr.toFixed(2)} calories
          </p>
        )}
      </div>
    </div>
  );
};
export default Calculator;
