import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import App from './containers/App.js';

const store = createStore(reducer);
//store.dispatch(getAllData());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);