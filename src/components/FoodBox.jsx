import React from 'react'
import { Card, Col, Button } from 'antd';

const FoodBox = ({food, deleteFood}) => {
    return (
        <Col>
          <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}>
            <img src={food.image} height={60} alt="food" />
            <p>{food.calories}</p>
            <p>{food.servings}</p>
            <p>
              <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>
            <Button type="primary" onClick={()=>{deleteFood(food.name)}}> Delete </Button>
          </Card>
        </Col>
      );
}

export default FoodBox