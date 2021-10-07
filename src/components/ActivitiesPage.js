import React, {useState, useEffect} from 'react' 
import ActivityCard from './ActivityCard'

function ActivitiesPage(){


    const [activities, setActivities] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3000/activities')
        .then((res) => res.json())
        .then(setActivities)
        
    }, [])

    const activityCards = activities.map((activity) => {
        return <ActivityCard key = {activity.id} 
                    activity_name = {activity.activity_name} />

                }) 

    return(

        <div className = 'board-container'>
            <header>Activities Board</header>
            <div>
                <div className = 'card-container'>
                        {activities && activityCards}
                </div>
            </div>
        </div>
    )
}

export default ActivitiesPage;