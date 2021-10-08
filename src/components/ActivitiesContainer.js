import React, {useState, useEffect} from "react";
import { BASE_URL } from '../constraints';
import ActivityCard from "./ActivityCard";
import ActivityForm from "./ActivityForm";

function ActivitiesContainer(){

    //INDEX '/activities'

    const [activities, setActivities] = useState([])
    const [showForm, setShowForm] = useState(false)

    useEffect(() =>{
        fetch(BASE_URL + 'activities')
        .then((res) => res.json())
        .then(setActivities)
        
    }, [])

    //CREATE 

    function createActivity(activities) {
        fetch(BASE_URL + "activities", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(activities),
        })
          .then((res) => res.json())
          .then((json) => setActivities([...activities, json]))

    }

    function handleClick() {
        setShowForm((showForm) => !showForm)
      }


    function populateActivities(){
        
            return activities.map((activity) => (
              <ActivityCard key={activity.id}
                activity_name = {activity.activity_name}
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

        const newActivities = activities.map((act) => {
            if (act.id === activity.id) {
            act = activity;
            }
            return act;
        });
        setActivities(newActivities);
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
                {showForm ? <ActivityForm 
                createActivity={createActivity}/> : null}
                    <div className="button-container">
                        <button onClick={handleClick}>{showForm?
                          "Hide new Activity form":"Add a new Activity" }</button>
                    </div>
                
            
        </div> 
    )

    
}

export default ActivitiesContainer;