import * as ReactDOM from "react-dom";
import './App.css'
import Header from "./components/Header";
import Services from "./components/Services";
import Image from "./components/Image";
import { useEffect, useReducer, useState } from "react";
import Office from "./components/Office";

function App() {

  const serivces = ["Data", "Sercurity", "AI", "Cloud"]; //this will be called from an api 
  const src = "https/github.com/v152kuma.png"
  const height = 200

  const [status, setStatus] = useState(true);
  // const [status , toggle] = useReducer((status)=>!status, true)

  useEffect(() => { console.log(`The state of the restraut is ${status ? "open" : "closed"}`) },
  [status] //will fire everytime the state of the status changes 
  );


  return (
    <>
      <Office status={status} onStatus={setStatus} />
      <Header name="Vivek" year={new Date().getFullYear()} />
      <Image src={src} height={height} />
      <Services listOfServices={serivces}></Services>
    </>
  )
}

export default App
