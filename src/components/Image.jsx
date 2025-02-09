const Image = ({src, height}) =>{

    console.log(src)

    return (
        <>
        <img src={src.replace('http://localhost:5173', '')} height={height} ></img>
        </>
    )
}

export default Image