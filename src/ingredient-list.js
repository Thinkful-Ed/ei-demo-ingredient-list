import React from 'react';
import Ingredient from './ingredient';

export default function IngredientList() {
    const ingredientData = [
        {
            name: 'Banana',
            quantity: '10'
        },
        {
            name: 'Chocolate Sauce',
            quantity: '10 tbsp'
        },
        {
            name: 'Chopped Hazelnuts',
            quantity: '20'
        }
    ];

    const ingredients = ingredientData.map((ingredient, index) => (
        <Ingredient
            name={ingredient.name}
            quantity={ingredient.quantity}
            key={index}
        />
    ));
    return <div className="ingredient-list">{ingredients}</div>;
}
