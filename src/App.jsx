import { useState } from "react"
import Content from "./Content"
import Navbar from "./Navbar"
import SubmitRecipe from "./SubmitRecipe"
import Login from "./Login"

export default function App() {
  const [name, setName] = useState("")
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredientsTitle, setIngredientsTitle] = useState("")
  const [recipeContent, setRecipeContent] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  return(
    <>
      <Navbar name={name} /> 
      <SubmitRecipe 
      setRecipes={setRecipes}
      setRecipeTitle={setRecipeTitle}
      setIngredientsTitle={setIngredientsTitle}
      setRecipeContent={setRecipeContent} 
      /> 
      <Login setName={setName} />
      
      {recipes.map((recipe, index) => (
      <Content
      key={index}
      name={name}
      recipeTitle={recipeTitle}
      ingredientsTitle={ingredientsTitle}
      recipeContent={recipeContent}
      recipes={recipes}
      /> 
      ))}
      
    </>
  )
}