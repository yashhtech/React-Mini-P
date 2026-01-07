import React from 'react'
import PropsChild from './PropsChild'

const Props = () => {

    let Data=[

        {
            myimg:"/buds.jpeg",
            myprice:"999",
            mydes:"Earbuds"
         
        },{
            myimg:"/speaker.jpeg",
            myprice:"799",
            mydes:"Speaker"
        },{
            myimg:"/mouse.png",
            myprice:"1999",
            mydes:"Mouse"
        }
    ]



  return (
    <>
        <h1>My Products</h1>

        { 
            Data.map((e)=>
               
                 <PropsChild product={e}/>
            
            )
        }
        
       
    </>
  )
}

export default Props
