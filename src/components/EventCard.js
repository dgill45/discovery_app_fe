import React from 'react' 


function EventCard({ event_name, date, location}){



    return(


        <div className ='card-container'>
            <div className ="card">
                <div className = "card-body">
                    <h4>{event_name}</h4>
                    <hr className ='line'></hr>
                    <p>{date}</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
        )
}

export default EventCard;