import React from 'react';

let Navbar2 = () => {
  let Fruits = ['Apple', 'Banana', 'Mango'];

  return (
    <>
      <h3>List of Fruits:</h3>
      <ul>
        {Fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}
          </li>
        ))}
      </ul>
    </>
  ) 
}

export default Navbar2;

