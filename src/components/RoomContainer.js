import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import { RoomConsumer } from './Context'

function RoomContainer() {



    return (


        <RoomConsumer>
            {
            (value) =>{

                const {rooms, sortedRooms} = value
                return   <>
                <RoomFilter rooms={rooms}  />
                <RoomList sortedRooms = {sortedRooms} />
                
                
            </>
            }
            }
        </RoomConsumer>
      
    )
}

export default React.memo(RoomContainer)
