import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        height: "70px",
        background: "linear-gradient(90deg, #6a11cb, #2575fc)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
     
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          color: "#2575fc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
       <img src="vite.svg" alt="" />
      </div>

    
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "30px",
          margin: 0,
          padding: 0,
        }}
      >
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li
            key={item}
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "500",
              transition: "0.3s",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
