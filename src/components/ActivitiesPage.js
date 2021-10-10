import React from 'react' 
import ActivityCard from './ActivityCard'


function ActivityPage({activities, deleteActivity, updateActivity}){



    function populateActivities(){
        
        return activities.map((activity) => (
          <ActivityCard key={activity.id}
            activity_name = {activity.activity_name}
            deleteActivity={deleteActivity} 
            updateActivity={updateActivity}
            />
        ));

}

    return(

        <div>
           <header>All Activities Board</header>
                <div className = 'card-container'>
                    { activities && populateActivities()}
                </div>
        </div>
    )
}

export default ActivityPage;