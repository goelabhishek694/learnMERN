import React, { createRef, useState } from 'react'
//uncontrolled components 
function FormUn() {
    const inputValue=createRef();
    const handleClick=()=>{
        console.log(inputValue);
    }
  return (
    <div>
        <label>Name</label>
        <input type='text' ref={inputValue}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default FormUn