import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar(){


    return(
        <nav className = 'navbar'>
            <header className="jumbotron">
                <div className= "nav-link-container">
                    <div className = "nav-link">
                        <NavLink exact to ="/">Home</NavLink>
                    </div>
                    {/*<div>
                    {user? 
                    <div className = 'nav-link'>
                        <NavLink to ="/logout" onClick = {handleLogout}>Logout</NavLink>
                        <h2>Welcome, {user.username}!</h2>
                    </div> : 
                    <div className = 'nav-link'>
                        <NavLink to ="/login" onClick = {handleLogin} >Login</NavLink>
                        <Login onLogin={setUser} />
                    </div>}
                    </div>
                    <div className = 'nav-link'>
                        <NavLink to ="/users">Users</NavLink>
                    </div>*/}
                    <div className = 'nav-link'>
                        <NavLink to ="/activities">Activities</NavLink>
                    </div>
                </div>
            </header>

        </nav>
    )
}

export default NavBar;