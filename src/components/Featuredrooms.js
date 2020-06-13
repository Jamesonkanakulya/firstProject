import React, { Component } from 'react'
import { RoomContext} from './Context'
import { ServiceTitle } from './ServiceTitle'
import Room from './Room'

class Featuredrooms extends Component {

    static contextType = RoomContext

    render() {
        let {featuredRooms:rooms} = this.context
        rooms = rooms.map(room=>{
            return <Room key = {room.id} room={room}/>
        })
        
        return (
            <section className="featured-rooms">
                <ServiceTitle title="Featured rooms"/>
                <div className = " featured-rooms-center">
                    {rooms}
                </div>
                
                
                
                
                
            </section>
        )
    }
}

export default React.memo(Featuredrooms)
