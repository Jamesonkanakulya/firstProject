import React from 'react'
import Back from '../components/Back'
import { Banner } from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'
import { RoomConsumer } from '../components/Context'



export const Rooms = () => {
    return (
   



<RoomConsumer>
{
    (value) =>{
       

        
        
        return      <>

      
        <Back hero="defaultRoom">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    back home
                </Link>
                

            </Banner>
         
    
      </Back>
      <RoomContainer/>

    </>
    }
}
</RoomConsumer>
    )
}
