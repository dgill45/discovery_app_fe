import React, {useState} from 'react' 

function ActivityForm({ createActivity}){

    const [newActivity, setNewActivity] = useState({
        activity_name:  "",  
    })

    function handleChange(event) {

        setNewActivity({
                ...newActivity,
          [event.target.name]: event.target.value,
        });
      }


      function handleSubmit(event) {
        event.preventDefault();
        createActivity(newActivity)
      }


    return(
        <div className = "form container">
            <form onSubmit={handleSubmit} className ="form">
                <h3>Add a new Activity</h3>
                <input type ="text" 
                    name = "activity_name" 
                    onChange = {handleChange} 
                    value ={newActivity.activity_name} 
                    placeholder="Name of new activity"/>
                    <br />
                <input type ="submit" 
                    name ="submit" 
                    value="Submit New Activity" 
                    className="submit" />
            </form>
        </div>
    )
}

export default ActivityForm;