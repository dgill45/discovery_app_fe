import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";

function ActivityDetails(){

    const [activity, setActivity] = useState(null)
    const {id} = useParams()

    // Show a particular activity 
    useEffect(() =>{
        fetch(BASE_URL + `/activities/${id}`)
        .then((res) => res.json())
        .then(activity => setActivity(activity))

    }, [id])

    return(
        <div className = 'activity-container'>
            {activity && 
            <header>{activity.activity_name} </header>
            }

        </div>
    )
}

export default ActivityDetails;