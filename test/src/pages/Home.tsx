import { Link } from "react-router-dom"

function Home():any{
    return(
        <>
            <h1>Home</h1>
            <Link to='/sample-page'>Let's go to Sample Page!</Link>
        </>
    )
}

export default Home
