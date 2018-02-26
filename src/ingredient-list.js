import React from 'react';
import Ingredient from './ingredient';

export default function IngredientList() {
    return (
        <div className="ingredient-list">
            <Ingredient name="Banana" quantity="10" />
            <Ingredient name="Chocolate Sauce" quantity="10 tbsp" />
            <Ingredient name="Chopped hazelnuts" quantity="20" />
        </div>
    );
}
