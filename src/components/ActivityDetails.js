import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import EventForm from "./EventForm.js";

function ActivityDetails(){

    const [activity, setActivity] = useState(null)
    const [showForm, setShowForm] = useState(false)

    const {id} = useParams()
    console.log(id)

    // Show a particular activity 
    useEffect(() =>{
        fetch(BASE_URL + 'activities/' + id)
        .then((res) => res.json())
        .then(activity => setActivity(activity))

    }, [id])

    useEffect(() => {
        console.log(activity);
    }, [activity]);

    //Create an Event

    function createEvent(EventDetails) {
        const newEvent = {
          ...EventDetails,
          activity_id: id,
        };
    
    fetch(BASE_URL + `activities/${id}/events`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent),
      })
        .then((res) => res.json())
        .then((json) => {
          const newActivity = { ...activity, event: [...activity.event, json] };
          setActivity(newActivity);
        });
    }

    function handleClick() {
        setShowForm((showForm) => !showForm)
      }


    return(
        <div className = 'panel-container'>
            {activity && (
            <>
            <h3>Activity Name: {activity.activity_name}</h3>
                <div className = "panel">
                    <div className = "panel-body">
                            <h3>Add an Event</h3>
                    </div>

                    <div className = "event-form-container">
                    {showForm ? <EventForm 
                    createEvent={createEvent}/> : null}
                        <div className="button-container">
                            <button onClick={handleClick}>{showForm?
                            "Hide new Event form":"Add a new Event" }
                            </button>
                        </div>
                    </div>
                </div>
                
            </>
            )}
        </div>
    );
}

export default ActivityDetails;