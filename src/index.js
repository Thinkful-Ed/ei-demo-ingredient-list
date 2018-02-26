import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ingredient from './ingredient';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Ingredient />, document.getElementById('root'));
registerServiceWorker();
