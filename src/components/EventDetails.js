import React, {useState} from 'react' 
import { BASE_URL } from '../constraints'
import EventForm from "./EventForm"


function EventDetails(){
    const [event, setEvent] = useState({
        event_name:  "",
        posting_date: "",
        location: "",
        desc: ""  
    })

    useEffect(() => {
        fetch(BASE_URL + `events/${id}`)
          .then((res) => res.json())
          .then((json) => setEvent(json));
      }, [id]);
    
      return(
            <div className = 'panel-container'>
            {event && (
            <>
            <h3>Event Name: {event.event_name}</h3>
                <div className = "panel">
                    <div className = "panel-body">
                            <h3>Add an Event</h3>
                    </div>



                    <div className ='event-form'>
                        <EventForm  createEvent = {createEvent}/>

                    </div>
                    </div>
                    
                </>
                )}
            </div>
    );
      
            }
export default EventDetails;