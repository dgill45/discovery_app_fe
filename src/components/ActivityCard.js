import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function ActivityCard({activity, deleteActivity, updateActivity, initialDelay}){

    const [newActivity, setNewActivity] = useState({...activity})
    const [editActivity, setEditActivity] = useState(false)
    const [render, setRender] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])



    function handleChange(e) {
        const updatedActivity = {...newActivity}
        updatedActivity[e.target.name] = e.target.value;
        setNewActivity({ ...updatedActivity });
    
    }

    function toggleEdit() {
        setEditActivity(!editActivity);
      }

      
    function handleUpdate(e) {
        e.preventDefault();
        updateActivity(newActivity);
        setEditActivity(false);
     }

     if (!render) {
         return <></>
       }

    return(
       
            <div className ='card'>
                <div className ='card-body'>
                    <div className ='card-image'>
                    </div>
                    <hr className ='line'></hr>
                    <h3 className ='card-text'>{activity.activity_name}</h3>
                </div>
                <Link to ={`/activities/${activity.id}`}> 
                    <button className ="clicked">View this Activity</button>
                </Link>
                {editActivity && (
        <>
          <button className = "clicked" onClick={() => deleteActivity(activity)}>Delete this Activity!</button>

          <form onSubmit={handleUpdate}>
            <input name="name" value={newActivity.activity_name} onChange={handleChange} />
            <button type="submit">Update Gym</button>
          </form>
        </>
      )}
                 <button onClick={toggleEdit}>Edit</button>
            </div>

    )
}

export default ActivityCard;