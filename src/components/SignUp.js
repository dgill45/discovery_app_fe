import React, {useState} from 'react' 


function SignUp({ onLogin }) {
    const [user, setUser] = useState({
        firstname: "",
        lastname: ""
    })
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then(onLogin);
    }
  
    return (
        <div className ="form-box">
            <form className = "signup-form" onSubmit={handleSubmit}>
                <label htmlFor="First Name">First Name:</label>
                <input
                type="text"
                name="firstname" 
                value={user.firstname}
                onChange={(e) => setUser(e.target.value)}
                />
                <br/>
                <label htmlFor="Last Name">Last Name:</label>
                <input
                type="text"
                name ="lastname"
                value={user.lastname}
                onChange={(e) => setUser(e.target.value)}
                />
                <br/>
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
      </div>

     
    );
  }

  export default SignUp;