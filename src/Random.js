import React from 'react'

const Random = () => {
    //Basic working of a var name changing each time page refreshes.
    const handleNameChange=()=>{
    const names=["AA","Authun","Ayyati"];
    const int=Math.floor(Math.random(names.length)*3);
    return names[int];
  }
  return (
    <p>Hello {handleNameChange()} !!</p>
  )
}

export default Random