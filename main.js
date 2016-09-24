import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory ,hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import AppContainer from './base/components/AppContainer';
import { reducer as reduxFormReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';


const todoApp = combineReducers({
    form: reduxFormReducer
});


const store = createStore(todoApp);

ReactDOM.render( 
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer} />
      </Router>
    </Provider> , 
    document.getElementById('hackApp')
);
