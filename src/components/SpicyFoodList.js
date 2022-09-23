import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })


  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // console.log(newFood);
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods)
    // console.log(foods)
  
  }

  function handleClick(id) {
    const updatedFoods = foods.filter(food => food.id !== id);
    setFoods(updatedFoods);

    const newFoodsArray = foods.map((food) => {
      if(food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        }}
         else {
          return food;
         }
    });
    setFoods(newFoodsArray);
  }
        

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));


  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>

      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>

        {foodList}
        </ul>
    </div>
  );
}

export default SpicyFoodList;
