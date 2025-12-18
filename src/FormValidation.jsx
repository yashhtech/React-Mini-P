import React , {useState} from 'react'

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
     <div>
       <h1>FormValidation Component</h1>
         <form onSubmit={formValidation}>
        
        Name:- <input type="text" name='myname' value={form.myname} onChange={handlevalidation} /> <br /> <br />
        Email:- <input type="text" name='myemail' value={form.myemail} onChange={handlevalidation} /> <br /> <br />
        Password:- <input type="text" name='mypassword' value={form.mypassword} onChange={handlevalidation} /> <br /> <br />
        Confirm Password:- <input type="text" name='myconfirmpassword' value={form.myconfirmpassword} onChange={handlevalidation}/> <br /> <br />
        Contact:- <input type="text" name='mycontact' value={form.mycontact} onChange={handlevalidation} /> <br /> <br />

        <button type='submit'>Form Validation</button>


            </form>

    </div>
      
    </>
  )
}

export default FormValidation
