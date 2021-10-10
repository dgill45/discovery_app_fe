import React, {useState} from 'react' 

function EventForm({activities, createActivity}){

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
            <form onSubmit={handleSubmit} className ="add-activity">
                <h3>Add a new Activity</h3>
                <input type ="text" 
                    name = "name" 
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

export default EventForm;