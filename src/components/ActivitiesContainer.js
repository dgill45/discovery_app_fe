import React, {useState, useEffect} from "react";
import { BASE_URL } from '../constraints';
import ActivityCard from "./ActivityCard";

function ActivitiesContainer(){

    //INDEX '/activities'
    const [activities, setActivities] = useState([])

    useEffect(() =>{
        fetch(BASE_URL + 'activities')
        .then((res) => res.json())
        .then(setActivities)
        
    }, [])

    //CREATE 
    /*function createActivity(activity) {
        fetch(BASE_URL + "activities", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(activities),
        })
          .then((res) => res.json())
          .then((json) => setActivities([...activities, json]));*/


    function populateActivities(){
        
            console.log(activities);
            return activities.map((activity) => (
              <ActivityCard key={activity.id}
                activity={activity}
                deleteActivity={deleteActivity} 
                updateActivity={updateActivity}
                />
            ));
    
    }

    function updateActivity(activity) {
        fetch(BASE_URL + "activities/" + activity.id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",},
          body: JSON.stringify(activity),
        });

    }

    function deleteActivity(activity) {
        fetch(BASE_URL + "activity/" + activity.id, {
          method: "DELETE",
        });
        const newActivities = activities.filter((act) => act.id !== activity.id);
        setActivities(newActivities);
      }

    return(
        <div className = 'board-container'>
            <header>All Activities Board</header>
                <div className = 'card-container'>
                    { activities && populateActivities()}
                </div>
                {/*<ActivityForm createActivity = {createActivity}/>*/}
            
        </div> 
    )

    
}

export default ActivitiesContainer;