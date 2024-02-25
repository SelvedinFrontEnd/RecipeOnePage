export default function Content({ name, recipes }) {
    return (
      <>
        {recipes.map((recipe, index) => (
          <div key={index} className="">
            <h2>{recipe.title}</h2>
            <div>{recipe.ingredients.join(", ")}</div>
            <div>{recipe.instructions}</div>
            <div>
              <div>{name}</div>
              <div></div>
            </div>
          </div>
        ))}
      </>
    );
  }
  