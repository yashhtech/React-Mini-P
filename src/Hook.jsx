import React , { useState } from "react";
import './Hook.css'

const Hook = () => {
  const [count, setCount] = useState(0);

  let Inc = () =>{

             setCount(count + 1); 
            
            }
  let Dnc = () =>{

     setCount(count - 1);

    }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-r from-amber-300 via-orange-300 to-yellow-300">
      
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[320px] text-center space-y-6">
        
        <h1 className="text-3xl font-bold text-gray-800">
          useState Counter
        </h1>

        <div className="text-5xl font-extrabold text-amber-500">
          {count}
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={Dnc}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition duration-300"
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

      </div>

    </div>
  );
};
export default Hook;
