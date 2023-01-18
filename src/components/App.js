import React, { useState } from 'react'
import { CleanPlugin } from 'webpack';

const App = () => {
  const [relativelist,setRelativeList]= useState([
    "Uncle","Aunty","Neice","Nephew","Aunty",
  ]);

  return (
    <div id="main">
               {/* Do not remove the main div */}
<ol>
  {relativelist.map((relativelist,indx)=>{
    
    console.log(relativelist+indx);
    return <li key={relativelist+indx}> Name : {relativesname}</li>
  })}
</ol>
    </div>
  )
}

export default App
