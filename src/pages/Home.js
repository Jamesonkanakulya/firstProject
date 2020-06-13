import React from 'react'
import Back from '../components/Back'
import { Banner } from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import Featuredrooms from '../components/Featuredrooms'



const Home =() =>{
    return(
    <>
        <Back>

            <Banner title="Luxuriuos rooms" subtitle="deluxe rooms startting at $200">
                <Link to="/rooms" className="btn-primary">
                    our rooms
            </Link>

            </Banner>
        </Back>
        <Services/>
        <Featuredrooms/>

        
      
    </> 
    );

    

}

export default React.memo(Home)
