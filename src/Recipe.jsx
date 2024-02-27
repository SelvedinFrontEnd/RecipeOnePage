import React from "react";

export default function Recipe({ submitedRecipes }) {
  return (
    <div className="recipe-container">
      <ul>
        {submitedRecipes.map((recipe, index) => (
          <div className="recipe" key={index}>
            <li>
              <strong>Title:</strong> {recipe.title}
              <br />
              <strong  className="flex">Ingredients:</strong>{" "}
              {Array.isArray(recipe.ingredients)
                ? recipe.ingredients.join(", ")
                : ""}
              {/* Join ingredients with commas */}
              <br />
              <strong  className="flex">Cooking Instructions:</strong>{" "}
              {recipe.cookingInstructions}
              <br />
              <strong>Author:</strong> {recipe.name}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
