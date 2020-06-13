import React, { Component } from 'react'
import StyledHero from '../components/Styledcomponent'
import { Banner } from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../components/Context'
import defaultBcg from '../images/room-1.jpeg'
import Back from '../components/Back'



class Singleroom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
           
                        
        }
      
       
        
    }


    

    static contextType = RoomContext


    render() {
    
        const room = this.context.getRoom(this.state.slug)
        
        
        if (!room) {
            return (
                <Back className="error">
                   <Banner>
                   <h3>no such room could be found...</h3>
                    <Link to="/room" className="btn-primary">
                        back to room 
                    </Link>
                   </Banner>

                </Back>
            )
        }

        const { name, description, capacity, size, price,
            extras, breakfast, pets, images } = room

            const [mainImg, ...otherImg] = images
        
      

        
      
        return (
          <>
            <StyledHero img={mainImg}>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    Back to rooms
            </Link>
            
            </Banner>
            
            
            </StyledHero>
            <section className="single-room">
                    <div className="single-room-img">
                        {

                            images.map((item, index) => {
                                return <img key={index} scr ={item} alt={name} />
                            })
                        }

                    </div>
                    <div className="single-room-info">
                        <article className="desc" >
                            <h3>Details</h3>
                            <p>{description}</p>

                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6> price : ${price}</h6>
                            <h6> size : {size} SQFT</h6>
                            <h6>Max capacity :{
                                capacity > 1 ? `${capacity} Peaple` :
                                    `${capacity} person`}</h6>

                            <h6>{pets ? "pets allowed" : "pets not allowed"} </h6>
                            <h6> {breakfast && "free breakfast included"}</h6>


                        </article>

                    </div>


            </section>

            <section className = "room-extras">
                <h6>extras</h6>
                <ul>
                    {
                        extras.map((item,i) =>
                    <li key={i}>{item}</li>

                        )
                    }
                </ul>
            </section>
          </>
            
        )
    }
}

export default React.memo(Singleroom)
