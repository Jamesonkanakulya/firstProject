import React from 'react'
import Room from '../components/Room'

function RoomList({sortedRooms}) {
    if(sortedRooms.length ===0){
        return (
            <div className="empty-search" >
                <h3> unfortunately no room matches your search parameters </h3>

            </div>
        )
    }
    return (
        <section className= "roomslist">
            <div className="roomslist-center">
                {
                   sortedRooms.map(item=>{
                        return <Room key={item.id} room={item}/>
                    })
                }
                

            </div>
            hello room list
            
        </section>
    )
}

export default React.memo(RoomList)
