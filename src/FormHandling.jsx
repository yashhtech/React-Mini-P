import React, { useState } from 'react'

const FormHandling = () => {

    let[myname,setmyname]=useState("")
    let[myemail,setmyemail]=useState("")
    let[mypassword,setmypassword]=useState("")

    let handleSubmit=(e)=>{

        e.preventDefault()

        alert(`
            
            Name=${myname} and 
            Email=${myemail}
            Password=${mypassword}`)
    }

  return (
    <>

    <form onSubmit={handleSubmit}>

        Enter Name:- <input type="text" value={myname} onChange={(e)=>{setmyname(e.target.value)}}/> <br /> <br />
        Enter Email:- <input type="text" value={myemail} onChange={(e)=>{setmyemail (e.target.value)}}/> <br /> <br />
        Enter Password:- <input type="text" value={mypassword} onChange={(e)=> {setmypassword(e.target.value)}}/> <br /> <br />

        <button type='submit'>Handle Form</button>
    </form>
      
    </>
  )
}

export default FormHandling
