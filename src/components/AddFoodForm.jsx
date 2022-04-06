import React, { useState } from 'react'
import { Divider, Input } from 'antd';


const AddFoodForm = (props) => {
  const [newFood, setNewFood] = useState({
    name:'',
    image:'',
    calories:'',
    servings:'',
  })
  

  const handleChange = (e) => {
        setNewFood({
            ...newFood, 
             [e.target.name]: e.target.value
        })
    }

  const handleSubmit = (e) => {

        e.preventDefault()
      return(

        setNewFood({
      name:'',
      image:'',
      calories:'',
      servings:''
        })
      )

    }




    return (
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input value={newFood.name} type="text" onChange={(e) => {handleChange(e)}} name="name"/>
    
          <label>Image</label>
          <Input value={newFood.image} type="text" onChange={(e) => {handleChange(e)}} name="image"/>

    
          <label>Calories</label>
          <Input value={newFood.calories} type="text" onChange={(e) => {handleChange(e)}} name="calories"/>

    
          <label>Servings</label>
          <Input value={newFood.servings} type="text" onChange={(e) => {handleChange(e)}} name="serving"/>

    
          <button type="submit">Create food</button>
        </form>
      );
}

export default AddFoodForm