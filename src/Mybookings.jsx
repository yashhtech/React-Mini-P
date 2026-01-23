import axios from 'axios'
import { tr } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'

const Mybookings = () => {
     
    let[Data, setData ]=useState([])


    useEffect( ()=>{

        let api = "http://localhost:3000/flight"

        axios.get(api).then( (res)=>{
            console.log(res.data);
            setData(res.data)

           }).catch((err)=>{

            console.log("Net nhi chall rha aapka ");

        })
    }, [] )


  return (
    <div>
      <h1>my bookings</h1>
      
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>City</th>
            </tr>
        </thead>

        <tbody>
            {Data.map( (e)=>(

                <tr>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.email}</td>
                    <td>{e.city}</td>
                </tr>
            ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Mybookings
