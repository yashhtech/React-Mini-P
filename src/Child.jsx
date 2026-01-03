import React from 'react'
import './App.css'



let Child = ({ data }) => {
  return (
    <>
      <div className="min-h-screen bg-amber-200 p-8">

       <h1 className='font-bold text-3xl text-black'>My Products</h1>

        
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((e, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-xl border border-slate-200
                         shadow-md hover:shadow-xl
                         transition duration-300"
            >
              {/* IMAGE */}
              <div className="h-52 overflow-hidden rounded-t-xl">
                <img
                  src={e.pimage}
                  alt={e.pname}
                  className="w-full h-full object-cover
                             transition duration-300 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-slate-800 mb-1">
                  {e.pname}
                </h3>

                <p className="text-slate-600 text-sm mb-3">
                  {e.pdes}
                </p>

                <p className="text-xl font-bold text-slate-900 mb-4">
                  ₹ {e.pcost}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-3 justify-center">
                  <button
                    className="px-4 py-2 rounded-lg text-sm font-medium
                               text-white bg-cyan-400
                               hover:bg-slate-800
                               transition duration-200"
                  >
                    Add to Cart
                  </button>

                  <button
                    className="px-4 py-2 rounded-lg text-sm font-medium
                               text-slate-700 border bg-amber-400
                               hover:bg-slate-700 hover:text-white
                               transition duration-200"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Child


