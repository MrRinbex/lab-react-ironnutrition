// src/App.js
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
function App() {
  const [foodList, setFoodList] = useState(foods)
  
  return <div className="App">
  <AddFoodForm food={foods}  />
  
  <h2>Food List</h2>
  
  <div className='food-list'>
  {foodList.map((food)=>{
    return(
      <FoodBox food={food} />
    )
  })}
  </div>
</div>;
}
export default App;