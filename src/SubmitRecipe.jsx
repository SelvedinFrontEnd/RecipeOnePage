import Ingredients from "./Ingredients"
import { useRef } from "react";

export default function SubmitRecipe() {
    const inputIngredientsRef = useRef();

    function addIngredients(e){
        e.preventDefault();

        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = "new-input"

        inputIngredientsRef.current.appendChild(newInput)
    };

    return(
        <>
            <form className="submit-recipe">
                <label>
                    Title:
                    <input type="text" maxLength={50} />
                </label>
                <label>
                    Cooking instructions:
                    <textarea type="text" />
                </label>
                <Ingredients inputIngredientsRef={inputIngredientsRef} addIngredients={addIngredients} />
                <button className="btn">Submit</button>
            </form>
        </>
    )
}