// src/App.js
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchFood from './components/SearchFood';
import foods from './foods.json';
function App() {
  const [foodList, setFoodList] = useState(foods)
  const [foodListBack, setFoodListBack] = useState(foods)


  const addFood = (newFood) => {
    const addedFood = [newFood, ...foodList]
    const updateFood = [newFood,...foodListBack]
  setFoodList(addedFood)
  setFoodListBack(updateFood)
  }

  const deleteFood = (name) => {
    const filteredFoods = foodListBack.filter( (food) => {
			return food.name !== name
		})
    setFoodList(filteredFoods)
    setFoodListBack(filteredFoods)
  return
  }

  const filteredFoods = (food) => {
    let filtered;
    if (food === '') {
      filtered = foodListBack;
    } else {
      filtered = foodListBack.filter((foods) => {
          return foods.name[0].toLowerCase() === food.toLowerCase();
      })
    }
    setFoodList(filtered);
  }


  
  return <div className="App">
  <AddFoodForm addFood={addFood}  />
  <SearchFood filteredFoods={filteredFoods}/>
  
  <h2>Food List</h2>
  
  <div className='food-list'>
  {foodList.map((food, i)=>{
    return(
      <FoodBox food={food} key ={i} deleteFood={deleteFood}/>
    )
  })}
  </div>
</div>;
}
export default App;