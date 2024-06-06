// FoodMenu.js
import React, { useState } from "react";
import "./FoodMenu.css";

const FoodMenu = () => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const ingredients = ["Tomato", "Lettuce", "Cheese", "Onion"];

  const handleIngredientChange = (e) => {
    setSelectedIngredient(e.target.value);
  };

  return (
    <div className="food-menu">
      <h2>Food Menu</h2>
      <select value={selectedIngredient} onChange={handleIngredientChange}>
        <option value="">Select Ingredient</option>
        {ingredients.map((ingredient, index) => (
          <option key={index} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>
      {selectedIngredient && (
        <div className="selected-ingredient">
          You selected: <strong>{selectedIngredient}</strong>
        </div>
      )}
    </div>
  );
};

export default FoodMenu;
