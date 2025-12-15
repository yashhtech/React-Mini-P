import React from 'react'
import './Child.css'




let Child = ({data})=> {
  


return (
    <>
        <div class="productcontainer">
              {data.map((e,i)=>(
    <div class="productbox" key={i}>

        <img src={e.pimage } alt={e.pname}/>
        <h3>{e.pname}</h3>
        <p class="desc">{e.pdes}</p>
        <p class="price">{e.pcost}</p>
        <div class="btngroup">
            <button class="btn add">Add to Cart</button>
            <button class="btn buy">Buy Now</button>
        </div>
    </div>
              ))}
</div>


    </>
  )
}

export default Child


