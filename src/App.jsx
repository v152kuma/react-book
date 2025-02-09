import * as ReactDOM from "react-dom";
import './App.css'
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  
  const serivces = ["Data", "Sercurity", "AI", "Cloud"]; //this will be called from an api 


  return (
    <>
    <Header name="Vivek" year={new Date().getFullYear()}/> 
    <main>creates the most adavanced  softwares !!!</main>
    <Services listOfServices={serivces}></Services>
    </>
  )
}

export default App
