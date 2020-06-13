import React, { Component } from 'react'

import Client from '../Contentful'


const RoomContext = React.createContext();


export default class RoomProvider extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items:[],
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true ,
            type:'all',
            capacity:1,
            price:0,
            minPrice:0,
            maxPrice:0,
            minSize:0,
            maxSize:0,
            breakfast:false,
            pets:false


        }
    }

    getData = async () => {
      
        try {
            let response = await Client
                .getEntries({
                    content_type: 'beachresort'
                })
                .then((response) => this.setState({
                    items:response.items
                }),
    
                )

                let rooms = this.formatData(this.state.items)
                
                let featuredRooms = rooms.filter(room=>room.featured===true);
                this.setState({
                    rooms, featuredRooms,sortedRooms:rooms,
                    loading:false,
                    maxPrice: Math.max(...rooms.map(item=>item.price)),
                    maxSize:Math.max(...rooms.map(item=>item.size))
                    
            
                })



        } catch (error) {
            console.log(error);
            
        }
      
    }


  
    componentDidMount() {
      this.getData()
     
      
        
    }

    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = { ...item.fields, images: images, id };
            return room;
        });
        return tempItems
    }
    getRoom = (slug) =>{

        const newrooms = [...this.state.rooms]
        let myroom = newrooms.find(room => room.slug === slug);
        return myroom
     
        
    }
    handleChange = event =>{
        const target = event.target
        const value = event.type === "checked" ?
        target.checked:target.value
        const name = event.target.name;
        this.setState({
            [name]:value
        },this.filteRooms)
       

    }

    filteRooms = ()=>{
        let{rooms, type, capacity, price,
             minPrice, maxPrice, minSize, maxSize,
              breakfast, pets } = this.state
        let tempRooms = [...rooms]
        //transiform values
        capacity = parseInt(capacity)
        //filter by type

        if(type !=='all'){
            tempRooms = tempRooms.filter(room=>room.type===type) 
        }
        //filter by capacity
        if(capacity !==1){
            tempRooms = tempRooms.filter(room=>room.capacity>=capacity ) 
        }
        //filter by price
        tempRooms= tempRooms.filter(room=>room.price<=price)
        this.setState({
            sortedRooms:tempRooms
        })
        //filter by size
        tempRooms= tempRooms.filter(room=>room.size>=minSize && room.size<=maxSize)
//filter by breakfast
if(breakfast){
    tempRooms= tempRooms.filter(room=>room.breakfast===true )

}
//filter by pets
if(pets){
    tempRooms= tempRooms.filter(room=>room.pets===true )

}

        
        
    }
  

   

    render() {
        return <RoomContext.Provider value={{...this.state, getRoom:this.getRoom,handleChange:this.handleChange}}>
            {this.props.children}
        </RoomContext.Provider>


    }
}
const RoomConsumer = RoomContext.Consumer

export { RoomConsumer, RoomContext, RoomProvider }
