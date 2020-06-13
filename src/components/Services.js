import React, { Component } from 'react'
import { ServiceTitle } from './ServiceTitle'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'





export default class Services extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             services:[
                 {
                     icon:<FaCocktail/>,
                     title:"Free Cocktail",
                     info:`windows formatting and all software up pro etc.if you are interested please
                     `
                      
                 },
                 {
                    icon:<FaHiking/>,
                    title:"Endless Hiking",
                    info:`windows formatting and all software up pro etc.if you are interested pleas
                    `
                     
                },  
                {
                    icon:<FaShuttleVan/>,
                    title:"Free Shuttle",
                    info:`windows formatting and all software up pro etc.if you are interested pleas
                    `
                     
                },
                {
                    icon:<FaBeer/>,
                    title:"Strongest Beer ",
                    info:`windows formatting and all software up pro etc.if you are interested pleas
                    `
                     
                }
             ]
        }
    }
    
    render() {
        const {services} = this.state
        return (
            <div> 
                <ServiceTitle title="Services"/>
                <section className="service-center ">
                    {services.map((item,index)=>{
                        return(
                            <article key={index} className="services">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}

                </section>
                
                
            </div>
        )
    }
}
