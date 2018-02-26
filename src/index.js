import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IngredientList from './ingredient-list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IngredientList />, document.getElementById('root'));
registerServiceWorker();
