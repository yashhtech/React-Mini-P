import React from 'react'
import Child from './Child'

let App=()=> {

 let products=[
   {pimage : 'buds.jpeg',
    pname : 'Wireless Earbuds',
    pdes : 'High Quality Bluetooth Earbudswith Noise Cancellation',
    pcost : '1990'
   },
   
   {pimage : 'watch.jpeg',
    pname : 'Smart Watch',
    pdes : 'Touchscreen fitness smartwatch with heart-rate monitor',
    pcost : '3499'
   },

   {pimage : 'speaker.jpeg',
    pname : 'Blutooth Speaker',
    pdes : 'Portable Speaker with deep bass & long battery life ',
    pcost : '1599'
   },

   {pimage : 'mouse.png',
    pname : 'Gaming Mouse',
    pdes : 'Wireless RGB gaming mouse with high precision sensor',
    pcost : '1299'
   }


 ]


  return (


    <>
      
     
      <Child data={products}/>

    </>
  )
}

export default App
