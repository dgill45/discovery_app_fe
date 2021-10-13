import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";

function ActivityDetails(){

    const [activity, setActivity] = useState(null)
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


    return(
        <div className = 'panel-container'>
            {activity && (
            <>
            <h3>Activity Name: {activity.activity_name}</h3>
                <div className = "panel">
                    <div className = "panel-body">
                            <h3>Add an Event</h3>
                    </div>
                    
                </div>
                
            </>
            )}
        </div>
    );
}

export default ActivityDetails;