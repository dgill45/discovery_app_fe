import React, {useState, useEffect} from 'react'
import { BASE_URL } from '../constraints'
import EventCard from './EventCard'
import EventForm from './EventForm'


function EventContainer({createEvent}){

    const [events, setEvents] = useState([])
    const [showEventForm, setShowEventForm] = useState(false)


    //Index(Read) Events
    useEffect(() =>{
        fetch(BASE_URL + 'events')
        .then((res) => res.json())
        .then(setEvents)
        
    }, [])

    function populateEvents(){
        
        return events.map((event) => (
          <EventCard key={event.id}
            event_name = {event.event_name}
            date = {event.posting_date}
            location = {event.location}
            updateEvent = {updateEvent}
            deleteEvent = {deleteEvent}
            />
        ));

}
    function handleClick() {
        setShowEventForm((showEventForm) => !showEventForm)
    }

 //  UPDATE Event
         
    function updateEvent(event) {
        fetch(BASE_URL + "events/" + event.id, {
            method: "PUT",
            body: JSON.stringify(event),
            headers: {
        "Accept": "applicaton/json",
        "Content-Type": "application/json",
        },
        });
  
        const newEvents = events.map ((eve) => {
            if (eve.id === event.id) {
                eve = event;
            }
            
            return eve;
        });
        setEvents(newEvents);
        alert("Event updated!")
        }
        

  // DELETE Event

    function deleteEvent(event) {
        fetch(BASE_URL + "events/" + event.id, {
        method: "DELETE",
        });
        const newEvents = events.filter((eve) => eve.id !== events.id);
        setEvents(newEvents);
        alert("You have successfully deleted the Event!")
    }

    return (
            
        <div className ="event-container">
            <h3>All Events</h3>
            <div className = 'card-container'>
                 { events && populateEvents()}
                 <div className = 'event-form-container'>
                    {showEventForm ? <EventForm 
                    createEvent={createEvent}/> : null}
                    <div className="button-container">
                        <button onClick={handleClick}>{showEventForm?
                          "Hide new Event form":"Add a new Event" }
                        </button>
                      </div>
                  </div>    
            </div>
        </div>
    )
}

export default EventContainer;