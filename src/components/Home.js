import React from "react"
import {Link} from 'react-router-dom'



function Home(){

    

    return (



        <div>
           <header className="App-header">
                <h1 className="display-4">Welcome to the Discovery App!</h1>
                <p className="lead">Use your online life to live life offline.</p>
            </header>
            Already a member?  <Link to={"/login"} ><strong>Click Here to Login</strong></Link><br/>
            Not a member?  Become a Discoverer! <strong>Sign Up<Link to = {'/signup'} > Here.</Link></strong>


            <p>The Discover App is a new way to make friends, <br/>
                explore interests and try new things.<br/>
                Discoverer's coordinate events with like-minded <br/>
                people in a myriad number of events.<br/>
                Rediscover your pre-pandemic life with us!

            </p>
        </div>
    )
}

export default Home;