import React from 'react'
import { Divider, Input } from 'antd';


const AddFoodForm = ({food}) => {
    return (
        <form>
          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input value={food.name} type="text" onChange={() => {}} />
    
          <label>Image</label>
          {/* render antd <Input /> type="text" here */}
          <Input value={food.image} type="text" onChange={() => {}} />

    
          <label>Calories</label>
          {/* render antd <Input /> type="number" here */}
          <Input value={food.calories} type="text" onChange={() => {}} />

    
          <label>Servings</label>
          {/* render antd <Input /> type="number" here */}
          <Input value={food.servings} type="text" onChange={() => {}} />

    
          <button type="submit">Create</button>
        </form>
      );
}

export default AddFoodForm