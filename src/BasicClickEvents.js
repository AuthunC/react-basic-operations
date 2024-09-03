import React from 'react'

const BasicClickEvents = () => {
    //normal click event
    const handleClick=()=>{
        console.log("Hello");
    }

    //Parameterized click event
    const handleClick1=(name)=>{
        console.log(`Hello ${name}`);
    }

    //event function
    const handleClick2=(e)=>{
        console.log(e);                  //-->Prints whole event data
        console.log(e.target);           //-->Prints event's target element
        console.log(e.target.innerText); //-->Prints target element's text alone
    }

  return (
    //Normal click event 
    // <div> <button onClick={handleClick}>Click Me</button> </div>

    //Parameterized click event
    //Use anonymous function for parameterized using function
    // <div> <button onClick={()=>handleClick1('Authun')}>Click Me</button> </div>

    //event function
    <div> <button onClick={(e)=>handleClick2(e)}>Click Me</button> </div>
  )
}

export default BasicClickEvents