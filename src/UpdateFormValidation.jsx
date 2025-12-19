import React, { useState } from "react";
import './Hook.css';


const UpdateFormValidation = () => {
  const [state, setState] = useState({
    values: {
      myname: "",
      myemail: "",
      mypassword: "",
      myconfirmpassword: "",
      mycontact: "",
    },
    errors: {},
  });

  const handleChange = (e) => {
    setState({
      ...state,
      values: {
        ...state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  const formValidation = (e) => {
    e.preventDefault();

    let errors = {};
    const { myname, myemail, mypassword, myconfirmpassword, mycontact } =
      state.values;

    if (myname.trim() === ""){

       errors.myname = "Name cannot be empty";
    } 

    if (myemail === ""){
        errors.myemail = "Email cannot be empty";

    } 
    else if (!(myemail.includes("@") && myemail.includes(".com"))){
        errors.myemail = "Invalid Email";
    }

    if (mycontact === "") {
        errors.mycontact = "Contact cannot be empty";
    }
    else if (isNaN(mycontact)) {
        errors.mycontact = "Only numbers allowed";
    }
    else if (mycontact.length !== 10){
      errors.mycontact = "Contact must be 10 digits";
      }

    if (mypassword === "") {
        errors.mypassword = "Password cannot be empty";
    }
    else if (mypassword.length < 6){
      errors.mypassword = "Minimum 6 characters";
      }

    if (mypassword !== myconfirmpassword){
      errors.myconfirmpassword = "Passwords do not match";
    }

    setState({ ...state, errors });

    if (Object.keys(errors).length === 0) {
      alert("Form Submitted Successfully ✔");
      window.location.reload();
    }
  };

  const { values, errors } = state;

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={formValidation}
        className="w-87.5 bg-zinc-900 border border-cyan-400 
                   shadow-[0_0_20px_#22d3ee] rounded-xl px-5 py-4"
      >
        <h1 className="text-center text-xl font-bold text-cyan-400 mb-3">
           Form Validation
        </h1>

        {/* NAME */}
        <div className="mb-2">
          <input
            type="text"
            name="myname"
            placeholder="Name"
            value={values.myname}
            onChange={handleChange}
            className="w-full px-3 py-1.5 text-sm bg-black text-cyan-300 
                       border border-cyan-500 rounded-md
                       focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          {errors.myname && (
            <p className="text-xs text-red-400 mt-0.5">{errors.myname}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-2">
          <input
            type="text"
            name="myemail"
            placeholder="Email"
            value={values.myemail}
            onChange={handleChange}
            className="w-full px-3 py-1.5 text-sm bg-black text-cyan-300 
                       border border-cyan-500 rounded-md
                       focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          {errors.myemail && (
            <p className="text-xs text-red-400 mt-0.5">{errors.myemail}</p>
          )}
        </div>

     
        <div className="mb-2">
          <input
            type="password"
            name="mypassword"
            placeholder="Password"
            value={values.mypassword}
            onChange={handleChange}
            className="w-full px-3 py-1.5 text-sm bg-black text-cyan-300 
                       border border-cyan-500 rounded-md
                       focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          {errors.mypassword && (
            <p className="text-xs text-red-400 mt-0.5">
              {errors.mypassword}
            </p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mb-2">
          <input
            type="password"
            name="myconfirmpassword"
            placeholder="Confirm Password"
            value={values.myconfirmpassword}
            onChange={handleChange}
            className="w-full px-3 py-1.5 text-sm bg-black text-cyan-300 
                       border border-cyan-500 rounded-md
                       focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          {errors.myconfirmpassword && (
            <p className="text-xs text-red-400 mt-0.5">
              {errors.myconfirmpassword}
            </p>
          )}
        </div>

        {/* CONTACT */}
        <div className="mb-3">
          <input
            type="text"
            name="mycontact"
            placeholder="Contact"
            value={values.mycontact}
            onChange={handleChange}
            className="w-full px-3 py-1.5 text-sm bg-black text-cyan-300 
                       border border-cyan-500 rounded-md
                       focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          {errors.mycontact && (
            <p className="text-xs text-red-400 mt-0.5">{errors.mycontact}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-1.5 text-sm font-semibold text-black
                     bg-cyan-400 rounded-md
                     hover:bg-cyan-300 transition
                     shadow-[0_0_10px_#22d3ee]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateFormValidation;
