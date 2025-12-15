import React  from "react";

let Hero=() => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-16 py-6">
        <h1 className="text-3xl font-extrabold tracking-wide">
          GameZone
        </h1>

        <ul className="flex gap-10 text-lg font-medium">
          <li className="cursor-pointer hover:text-yellow-300 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition">
            Games
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition">
            Store
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition">
            Contact
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-between px-16 py-20">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-6xl font-extrabold leading-tight">
            Enter the <span className="text-yellow-300">Next Level</span> of Gaming
          </h2>

          <p className="mt-6 text-lg text-white/90">
            Experience high-performance gaming, stunning graphics, and epic adventures.
          </p>

          <div className="mt-8 flex gap-6">
            <button className="px-8 py-3 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition">
              Play Now
            </button>

            <button className="px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition">
              Explore Games
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -inset-6 bg-pink-500 blur-3xl opacity-50 rounded-full"></div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="gaming"
            className="relative w-96 drop-shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero
