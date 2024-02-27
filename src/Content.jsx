import Recipe from "./Recipe"

export default function Content({submitedRecipes}) {
    return (
      <>
       <Recipe
       submitedRecipes={submitedRecipes}
       />
      </>
    );
  }
  