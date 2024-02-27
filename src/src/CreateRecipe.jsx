export default function CreateRecipe() {
    function handleClick() {
        document.querySelector(".submit-recipe").style.display = "flex"
        document.querySelector(".createrecipe").style.display = "none"
    }

    return(
        <>
            <div className="createrecipe">
               <button 
               className="btn create-recipe"
               onClick={handleClick}>
                Add your recipe
                </button> 
            </div>
            
        </>
    )
}