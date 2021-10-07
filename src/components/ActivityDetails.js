import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";

function ActivityDetails({activities}){

    const [activity, setActivity] = useState(null)
    const {id} = useParams()

    // Show a particular activity 
    useEffect(() =>{
        fetch(BASE_URL + `/activities/${id}`)
        .then((res) => res.json())
        .then(activity => setActivity(activity))

    }, [id])

    return(
        <div className = 'panel-container'>
            {activity && <div className = "panel">
            <div className = "panel-body">
                    <h3>{activity.activity_name}</h3>
            </div>
                
                
            </div>}
            
            <button className = 'clicked' > Edit this Activity</button>
            <button className = 'clicked' > Delete This Activity!</button>
            {/*<Messages activity={activity}/>*/}
        </div>
    )
}

export default ActivityDetails;