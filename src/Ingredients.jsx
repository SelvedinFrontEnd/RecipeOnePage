export default function Ingredients({addIngredients, inputIngredientsRef}) {
    return(
        <>
            <label className="ingredients">
                Add your ingredients:
                <div ref={inputIngredientsRef} className="input-ingredients">

                </div>
                <button onClick={addIngredients} className="btn-plus">+</button>
            </label>
        </>
    )
}