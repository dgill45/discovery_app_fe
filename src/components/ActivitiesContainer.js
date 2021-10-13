import React, {useState, useEffect} from "react";
import { BASE_URL } from '../constraints';
import ActivityForm from "./ActivityForm";
import ActivityCard from "./ActivityCard";

function ActivitiesContainer(){

    //READ '/activities'

    const [activities, setActivities] = useState([])
    const [showForm, setShowForm] = useState(false)

    useEffect(() =>{
        fetch(BASE_URL + 'activities')
        .then((res) => res.json())
        .then(setActivities)
        
    }, [])


    function populateActivities(){
        
      return activities.map((activity, idx) => (
        <ActivityCard key={activity.id}
          activity = {activity}
          deleteActivity={deleteActivity} 
          updateActivity={updateActivity}
          />
      ));
    }      
    //CREATE an activity

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

    //Form toggler
    function handleClick() {
        setShowForm((showForm) => !showForm)
      }

    //EDIT Activity
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

    //DESTROY an activity
    function deleteActivity(activity) {
        fetch(BASE_URL + "activity/" + activity.id, {
          method: "DELETE",
        });
        const newActivities = activities.filter((act) => act.id !== activity.id);
        setActivities(newActivities);
      }

    return(
        <div className = 'activities-board-container'>
            <div className = 'activities-card-container'>
                    { activities && populateActivities()}
                </div>

                  <div className = 'activities-form-container'>
                    {showForm ? <ActivityForm 
                    createActivity={createActivity}/> : null}
                    <div className="button-container">
                        <button onClick={handleClick}>{showForm?
                          "Hide new Activity form":"Add a new Activity" }
                        </button>
                      </div>
                  </div>
        </div> 
    )

    
}

export default ActivitiesContainer;