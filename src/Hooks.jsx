import React, { useState } from 'react'

const Hooks = () => {

    let [count,setCount ] =useState(0)

    let Inc=()=>{
        setCount(count+1)
    }

     let Dnc=()=>{
        setCount(count-1)
    }

    let Rst=()=>{
        setCount(count-count)
    }
  return (
    <>
       <div>
        
      <h1>Increment-Decrement</h1>

      

      <div><h1>{count}</h1></div>

      <div>    
        <button onClick={Inc}> Increment </button>

       <button onClick={Dnc}  disabled={count === 0}> Decrement </button>
       <button onClick={Rst}  disabled={count === 0}> Reset </button>
</div>
      </div>

         
        
  
       

    </>
  )
}

export default Hooks
