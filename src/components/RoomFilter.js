import React, { useContext } from 'react'
import { RoomContext } from './Context'
import { ServiceTitle } from './ServiceTitle'
//get all uniqe values
const getUnique = (items, value) => {
   return [...new Set(items.map(item => item[value]))]};


function RoomFilter({rooms}) {
    

    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize,  breakfast, pets } = context
    // get unique types
    let types =getUnique(rooms, 'type')
    //add all
   types = ['all', ...types]
    // map to jsx
    types = types.map((item, i) => {
        return <option value={item}
            key={i}>{item}</option>})
            


    let people = getUnique(rooms,'capacity')
    people = people.map((item,i)=>{
    return <option key={i}  value={item}>{item}</option>
    })
            
    
      

    return (
        <section className="filter-container">
            <ServiceTitle title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    {/* type*/}
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type}
                        className="form-control"
                        onChange={handleChange}> {!types?null:types}</select>
                    {/*type */}

                </div  >
                <div className="form-group">
                    {/* capacity*/} 
                    <label htmlFor="capacity">Guests</label>
                    <select name=" capacity " id="capacity" 
                    value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                             {people}</select>
                    {/*capacity */}

                     {/*price */}
                     <div className="form-group">
                     <label htmlFor="price">
                         room price ${price}

                     </label>
                     <input type = "range" name="price" min={minPrice}
                     max={maxPrice} value={price} onChange={handleChange}
                     className="form-control"
                     id="price"
                     />

                     </div>

                     
                      {/*price */}
                             {/*size */}
                             <div className="form-group">
                     <label htmlFor="size">
                         room size 

                     </label>
                     <input type = "number" name="minSize" id="size"
                    
                      value={minSize} onChange={handleChange}
                     className="size-input"/>
                  
                     <input type = "number" name="maxSize" id="size"
                    
                      value={maxSize} onChange={handleChange}
                     className="size-input"/>
                     </div>

                {/*size */}

                 {/*extras */}
                 <div className="form-group">
                     <div className="single-extra">
                         <input type="checkbox" name="breakfast"
                         id="breakfast" 
                        value={breakfast}
                         onChange={handleChange}
                         />
                         <label htmlFor="breakfast">breakfast</label>
                         <input type="checkbox" name="pets"
                         id="pets" 
                         value={pets}
                         onChange={handleChange}
                         />
                         <label htmlFor="pets">pets</label>

                     </div>

                 </div>
                  {/*extra */}
                




                </div>

            </form>

        </section>
    )
}

export default React.memo(RoomFilter)
