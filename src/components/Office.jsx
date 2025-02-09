const Office = ({status, onStatus}) =>{

return (
    <>

    <h1>The office is currently {" "} {status? "open":"closed"}</h1>
    <button onClick={()=> onStatus(!status)}> {status? "Close ":"Open "} Office </button> 
   
    </>
)

}

export default Office;