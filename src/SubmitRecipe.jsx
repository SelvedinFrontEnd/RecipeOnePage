import Ingredients from "./Ingredients"
import { useRef } from "react";
import { useState } from "react";
import CreateRecipe from "./CreateRecipe";

export default function SubmitRecipe() {
    const inputIngredientsRef = useRef();
    const [title, setTitle] = useState("")
    const [cookingInstructions, setCookingInstructions] = useState("")
    const [ingredientValues, setIngredientValues] = useState([])
    

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

    function handleSubmit(e){
        e.preventDefault()
        const ingString = ingredientValues.join(", ");

        if (!title || !cookingInstructions || ingredientValues.some(value => !value.trim())) {
            alert("Please fill in all fields!");
            return;
        }
        document.querySelector(".createrecipe").style.display = "flex";
        document.querySelector(".createrecipe").innerHTML = '<button class="btn">Add new recipe</button>';
        document.querySelector(".submit-recipe").style.display = "none";
        console.log("Title:",title, "Cooking Instructions:",cookingInstructions, "Ingredients:",ingString)
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