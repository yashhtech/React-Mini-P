import React from 'react'
import { useState } from 'react'

const FormHand = () => {

//   let [myname, setmyname]=useState('')
//   let [myage, setmyage]=useState('')
//   let [mycity, setmycity]=useState('')

   let [form, setform]=useState({


    myname:"",
    myage:"",
    mycity:"",

   })

    let handleChange=(e)=>{
      
      setform(e.target.value)
      

    }

    // let handleAge=(e)=>{
      
    
    //   setmyage(e.target.value)

    // }

    // let handleCity=(e)=>{
      
    
    //   setmycity(e.target.value)

    // }
  return (

    <>
     <div>
      Enter Name:- <input type="text" name='myname' value={form.myname} onChange={handleChange}/>
      Enter Age:- <input type="text" name='myage' value={form.myage} onChange={handleChange}/>
      Enter City:- <input type="text" name='mycity' value={form.mycity} onChange={handleChange}/>

       <h1>MY NAME IS : {form.myname} </h1>
       <h1>MY AGE IS : {form.myage}</h1>
       <h1>MY CITY IS : {form.mycity}</h1>
     </div>
    </>
  )
}

export default FormHand
