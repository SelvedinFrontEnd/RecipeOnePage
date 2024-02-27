import Ingredients from "./Ingredients"
import { useRef } from "react";
import { useState } from "react";
import CreateRecipe from "./CreateRecipe";

export default function SubmitRecipe({
    handleSubmit,
    title, 
    ingredientValues, 
    cookingInstructions,
    setIngredientValues,
    setCookingInstructions,
    setTitle
}) {
    const inputIngredientsRef = useRef();

    function addIngredients(e){
        e.preventDefault();

        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = "new-input"

        newInput.addEventListener("input", (e) => {
            handleIgredientChange(ingredientValues.length, e.target.value)
        })

        inputIngredientsRef.current.appendChild(newInput)

        setIngredientValues((prevValues) => [...prevValues, ""]);
    };

    function handleIgredientChange(index, value) {
        setIngredientValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        });
    }

    return(
        <>
            <form
            className="submit-recipe"
            onSubmit={handleSubmit}
            >
                <label>
                    Title:
                    <input 
                    type="text" 
                    maxLength={50} 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                </label>
                <Ingredients 
                inputIngredientsRef={inputIngredientsRef} 
                addIngredients={addIngredients} 
                ingredientValues={ingredientValues}
                handleIgredientChange={handleIgredientChange}
                />
                <label>
                    Cooking instructions:
                    <textarea 
                    type="text" 
                    value={cookingInstructions}
                    onChange={e => setCookingInstructions(e.target.value)}
                    />
                </label>
                
                <button className="btn">Submit</button>
            </form>
            <CreateRecipe />
        </>
    )
}