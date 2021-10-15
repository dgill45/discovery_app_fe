import React from "react"
import {Link} from 'react-router-dom'



function Home(){

    

    return (



        <div>
           <header className="App-header">
                <h1 className="display-4">Welcome to the Discovery App!</h1>
                <p className="lead">Use your online life to live life offline.</p>
            </header>
            Not a member?  Sign Up<Link to = {'/signup'} > Here.</Link>


        </div>
    )
}

export default Home;