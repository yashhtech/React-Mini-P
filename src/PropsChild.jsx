import React from 'react'
import './App.css'

const PropsChild = ({product}) => {
  return (
    <>
      
       <div> 
         
         <img src={product.myimg} alt="product"  />

         <h1>Price: {product.myprice}</h1>
         <h1>Description: {product.mydes}</h1>





       </div>



    </>
  )
}

export default PropsChild
