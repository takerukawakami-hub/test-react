import { Link } from "react-router-dom"

function SamplePage():any{
    return(
        <>
            <h1>SamplePage</h1>
            <Link to='/home' target='_blank'>you should back home :)</Link>
            
        </>
    )
}

export default SamplePage