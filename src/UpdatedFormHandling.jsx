import React, {useState} from 'react'

const UpdatedFormHandling = () => {

    let [form , setform] =useState({
        myname: "",
        myemail: "",
        mypassword:""
    })
    let handlechange=(e)=>{
        setform({ ...form , [e.target.name]:e.target.value})
    }
    
    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(`
            Name=${form.myname} and
            Email=${form.myemail}and
            Password=${form.mypassword}
            `)
    }
  return (
    <>
      
       <h1>Updated Form Handling</h1>

       <form onSubmit={handleSubmit}>

        Name:- <input type="text" name='myname' value={form.myname} onChange={handlechange}/> <br /> <br />
        Email:- <input type="text" name='myemail' value={form.myemail} onChange={handlechange}/> <br /> <br />
        Password:- <input type="text" name='mypassword' value={form.mypassword} onChange={handlechange}/> <br /> <br />

        <button type='submit'>Form Handling</button>
       </form>
    </>
  )
}

export default UpdatedFormHandling
