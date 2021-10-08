import React, {useState, useEffect} from 'react'
import { BASE_URL } from '../constraints'
import EventCard from './EventCard'


function EventContainer(){


    const [events, setEvents] = useState([])

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
            />
        ));

}

    return (
            
        <div className ="event-container">
            <h3>All Events</h3>
            <div className = 'card-container'>
                 { events && populateEvents()}
            </div>
        </div>
    )
}

export default EventContainer