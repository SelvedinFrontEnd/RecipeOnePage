import { useState } from "react"
import Content from "./Content"
import Navbar from "./Navbar"
import SubmitRecipe from "./SubmitRecipe"
import Login from "./Login"

export default function App() {
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [ingredientValues, setIngredientValues] = useState([])
  const [cookingInstructions, setCookingInstructions] = useState("")
  const [submitedRecipes, setSubmitedRecipes] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !cookingInstructions || ingredientValues.some(value => !value.trim())) {
      alert("Please fill in all fields!");
      return;
  }
  
    const newRecipe = {
      name: name,
      title: title,
      ingredients: [...ingredientValues],
      cookingInstructions: cookingInstructions,
    };
    setSubmitedRecipes([...submitedRecipes, newRecipe]);
    setTitle("");
    setIngredientValues([]);
    setCookingInstructions("");

    document.querySelector("form").style.display = "none"
    document.querySelector(".createrecipe").style.display = "flex"
  }

  return(
    <>
      <Navbar name={name}/> 
      <SubmitRecipe 
      handleSubmit={handleSubmit}
      ingredientValues={ingredientValues}
      cookingInstructions={cookingInstructions}
      title={title}
      setTitle={setTitle}
      setIngredientValues={setIngredientValues}
      setCookingInstructions={setCookingInstructions}
      /> 
      <Login 
      name={name}
      setName={setName} />
      <Content 
      submitedRecipes={submitedRecipes}
      />
      
    </>
  )
}