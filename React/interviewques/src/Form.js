import React, { useState } from 'react'
//controlled components 
function Form() {
    const [name,setName]=useState('');
    const handleClick=()=>{
        console.log(name+" Goel");
        // if(name.length<6){
        //   setEr
        // }
    }
  return (
    <div>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Form