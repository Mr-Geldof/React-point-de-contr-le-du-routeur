import React from 'react'
import { useParams, useLocation , useHistory } from 'react-router-dom'



const Description = () => {
    let history = useHistory()
    const { title } = useParams()
    let location = useLocation()
    const Data = location.state


    return (
        <>
            {
                Data.filter(movie => movie.title === title).map((movie, index) => (
                    <div style={containerStyle} key={index}>
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>
                        <iframe width="560" height="315" 
                        src={`${movie.src}?autoplay=1&mute=0`} 
                        title=""
                       ></iframe>
                       <div className="btn btn-primary"
                       style={{marginTop:"10px"}}
                       onClick={() => history.push('/')}
                       >Back to Home</div>
                    </div>
                ))
            }
        </>
    )
}
const containerStyle = {
    background: "#1f4037",
    width: "900px",
    height: "100%",
    marginTop: "6em",
    marginBottom: "20px",
    marginLeft: "200px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px"
}
export default Description