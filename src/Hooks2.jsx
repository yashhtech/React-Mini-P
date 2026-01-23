import React from 'react'
import { useState } from 'react'

const Hooks2 = () => {

  let [myname, setmyname]=useState('')
  let [myage, setmyage]=useState('')
  let [mycity, setmycity]=useState('')

    let handleName=(e)=>{
      
      setmyname(e.target.value)
      

    }

    // let handleAge=(e)=>{
      
    
    //   setmyage(e.target.value)

    // }

    let handleCity=(e)=>{
      
    
      setmycity(e.target.value)

    }
  return (

    <>
     <div>
      Enter Name:- <input type="text" value={myname} onChange={handleName}/>
      Enter Age:- <input type="text" value={myage} onChange={(e)=>{setmyage(e.target.value)}}/>
      Enter City:- <input type="text" value={mycity} onChange={handleCity}/>

       <h1>MY NAME IS : {myname} </h1>
       <h1>MY AGE IS : {myage}</h1>
       <h1>MY CITY IS : {mycity}</h1>
     </div>
    </>
  )
}

export default Hooks2
