import React from 'react';

export default function Ingredient(props) {
    return (
        <div className="ingredient">
            <div className="ingredient-name">{props.name}</div>
            <div className="ingredient-quantity">{props.quantity}</div>
        </div>
    );
}
