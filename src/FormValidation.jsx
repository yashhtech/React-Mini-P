import React , {useState} from 'react'
import './Hook.css';

const FormValidation = () => {

    let[form , setform]= useState({
        myname: "",
        myemail: "",
        mypassword: "",
        myconfirmpassword:"",
        mycontact:"",

    })

    let handlevalidation=(e) => {
        setform({ ...form ,[e.target.name]: e.target.value})
    }

    let formValidation=(e)=>{
        e.preventDefault()

         if ( form.myname.trim()=="" ){

          alert("Name cannot be empty")
          return
        }
        if(! (form.myemail.includes("@") && form.myemail.includes(".com")) ){
          alert("Invalid Email")
          return
         }
        if(form.myemail=="") {
         alert("Email cannot be empty")
         return
        }
        if(form.mycontact=="") {
         alert("number cannot be empty")
         return
        }

        if (isNaN(form.mycontact)){

          alert("PLEASE ENTER NUMBER ONLY")
          return 
         }

        if (form.mycontact.length!=10 ){

          alert("PLEASE ENTER 10 DIGIT ONLY")
          return
        }
        if (form.mypassword==""){
          alert("Password cannot be empty")
          return
        }
        if (form.mypassword.length<6){
          alert("Password must be at least 6 characters long")
          return
        }
        if (form.mypassword!=form.myconfirmpassword){
          alert("Password and Confirm Password must be same")
          return
        }
        else {
            
          alert(` 
          Name=${form.myname} and
          Email=${form.myemail} and
          Password=${form.mypassword} and
          Contact=${form.mycontact}
          `)
        }

        window.location.reload();
        
        
    }
  return (
    <>
     <div className="h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 to-purple-600">
        
         <form onSubmit={formValidation} className="bg-white p-6 py-4 rounded-xl shadow-2xl w-90">
        
               <h1 className="text-xl font-bold text-center text-indigo-600 mb-3">FormValidation Component</h1>

        <label className="block text-sm text-gray-600 mb-1">Name</label> 
        <input type="text" name='myname' value={form.myname} onChange={handlevalidation} className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"/> <br /> <br />
        <label className="block text-sm text-gray-600 mb-1">Email</label> 
        <input type="text" name='myemail' value={form.myemail} onChange={handlevalidation}  className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"/> <br /> <br />
        <label className="block text-sm text-gray-600 mb-1">Password</label>
         <input type="text" name='mypassword' value={form.mypassword} onChange={handlevalidation}  className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"/> <br /> <br />
        <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
         <input type="text" name='myconfirmpassword' value={form.myconfirmpassword} onChange={handlevalidation} className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"/> <br /> <br />
        <label className="block text-sm text-gray-600 mb-1">Contact</label> 
        <input type="text" name='mycontact' value={form.mycontact} onChange={handlevalidation} className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"/> <br /> <br />
        
        
        <button type='submit' className="w-full mt-3 bg-indigo-600 text-white py-1.5 rounded-md text-sm font-semibold hover:bg-indigo-700 transition">Form Validation</button>


            </form>

    </div>
      
    </>
  )
}

export default FormValidation
