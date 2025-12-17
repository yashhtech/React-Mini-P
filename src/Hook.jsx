import React, { useState } from "react";
import './Hook.css';

const Hook = () => {
  const [count, setCount] = useState(0);



  const Inc = () => setCount(count + 1);



  const Dnc = () => {

    if (count > 0) {
      setCount(count - 1);
    }
  };

  const Reset = () => setCount(0);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300">
      
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[340px] text-center space-y-6">
        
        <h1 className="text-3xl font-bold text-gray-800">
          useState Counter
        </h1>

        <div className="text-5xl font-extrabold text-amber-500">
          {count}
        </div>

        <div className="flex gap-4">
          <button
            onClick={Dnc}
            disabled={count === 0}
            className={`w-full py-2 rounded-lg font-semibold transition duration-300 
              ${count === 0 
                ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                : "bg-red-500 hover:bg-red-600 text-white"
              }`}
          >
            Decrement
          </button>

          <button
            onClick={Inc}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Increment
          </button>
        </div>

        <button
          onClick={Reset}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-300"
        >
          Reset
        </button>

      </div>
    </div>
  );
};

export default Hook;
