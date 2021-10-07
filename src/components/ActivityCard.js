import React from 'react'


function ActivityCard({id, activity_name, category_id}){

    return(
       
            <div className ='card'>
                <div className ='card-body'>
                    <div className ='card-image'>
                    </div>
                    <hr className ='line'></hr>
                    <h3 className ='card-text'>{activity_name}</h3>
                </div>

            </div>

    )
}

export default ActivityCard;