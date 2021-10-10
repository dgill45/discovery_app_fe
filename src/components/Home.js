import React from "react"
import {Link} from 'react-router-dom'


function Home(){

    

    return (



        <div>
            <h2>
                Welcome to the Home Page.
            </h2>
            Are you a member? 
            Login <Link to = {`/login`}> Here.</Link><br />
            Not a member?  Sign Up<Link to = {'/signup'} > Here.</Link>


        </div>
    )
}

export default Home;