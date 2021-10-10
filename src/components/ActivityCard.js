import React from 'react'
import {Link} from 'react-router-dom'


function ActivityCard({id, activity_name, deleteActivity, updateActivity}){

    return(
       
            <div className ='card'>
                <div className ='card-body'>
                    <div className ='card-image'>
                    </div>
                    <hr className ='line'></hr>
                    <h3 className ='card-text'>{activity_name}</h3>
                </div>
                <Link to ={`/activities/${id}`}> 
                    <button className ="clicked">View this Activity</button>
                </Link>
                <Link to = {`/activities/${id}`}>
                        <button className = "clicked" onClick = {deleteActivity}> Delete this Activity!</button>
                </Link>
            </div>

    )
}

export default ActivityCard;