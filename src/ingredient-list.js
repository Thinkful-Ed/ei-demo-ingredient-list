import React from 'react';
import Ingredient from './ingredient';

export default class IngredientList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [
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
            ]
        };
    }

    render() {
        const ingredients = this.state.ingredients.map((ingredient, index) => (
            <Ingredient
                name={ingredient.name}
                quantity={ingredient.quantity}
                key={index}
            />
        ));
        return <div className="ingredient-list">{ingredients}</div>;
    }
}
