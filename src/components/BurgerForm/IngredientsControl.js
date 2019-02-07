import React from 'react';

function IngredientsControl(props) {
    return (
        <div className="ingredients_control">
            <p> <span>{props.label}: {props.ingredientQuantity()}</span>
                <button type="submit" onClick={props.onRemoveIngredient}>Less</button>
                <button type="submit" onClick={props.onAddIngredient}>More</button>
            </p>
        </div>
    )
}

export default IngredientsControl;

