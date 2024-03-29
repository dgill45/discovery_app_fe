import React, {useState} from 'react' 

function EventForm({createEvent}){

    const [newEvent, setNewEvent] = useState({
        event_name:  "",
        posting_date: "",
        location: "",
        desc: ""  
    })

    function handleChange(event) {

        setNewEvent({
                ...newEvent,
          [event.target.name]: event.target.value,
        });
      }


      function handleSubmit(event) {
        event.preventDefault();
        setNewEvent(newEvent)
      }


    return(
        <div className = "form container">
            <form onSubmit={handleSubmit} className ="form">
                <input type ="text" 
                    name = "event_name" 
                    onChange = {handleChange} 
                    value ={newEvent.event_name} 
                    placeholder="Name of new event"/>
                    <br />
                <input type ="text" 
                    name = "posting_date" 
                    onChange = {handleChange} 
                    value ={newEvent.posting_date} 
                    placeholder="date of posted event"/>
                    <br />
                <input type ="text" 
                    name = "location" 
                    onChange = {handleChange} 
                    value ={newEvent.location} 
                    placeholder= "Where is this event happening?"/>
                    <br />
                <input type ="textarea" 
                    name = "desc" 
                    onChange = {handleChange} 
                    value ={newEvent.desc} 
                    placeholder="Brief description of your event"/>
                    <br />
                <input type ="submit" 
                    name ="submit" 
                    value="Submit New Event" 
                    className="submit" />
            </form>
        </div>
    )
}

export default EventForm;