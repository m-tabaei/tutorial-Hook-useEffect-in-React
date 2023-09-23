import { useEffect, useState } from "react";

const App = () => {
  let [reSize,setResize]=useState(window.innerWidth)
  const changeSize=()=>{
    setResize=(window.innerWidth)
  }
  useEffect(()=>{
    console.log("trigger size")
    window.addEventListener("reSize",changeSize)
   return()=>{
    console.log("clean up")
      window.removeEventListener("reSize",changeSize)
    }
  })
  return ( 
    <>
    
    <div className="col-6 offset-3 bg-dark text-white p-5 mt-3">
      <h1>Size:{reSize}</h1>
    </div>
    </>
   );
}
 
export default App;