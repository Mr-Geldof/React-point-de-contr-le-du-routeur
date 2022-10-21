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
                    <div key={index}>
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>
                        <iframe width="560" height="315" 
                        src={`${movie.src}`} 
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
export default Description