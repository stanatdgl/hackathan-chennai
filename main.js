import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './base/components/TodoApp';
import { todos, addTodoAction } from './base/reducers/TodoReducer';
import { createStore, combineReducers } from 'redux';


const todoApp = combineReducers({
    todos:todos
});


const todoAppStore = createStore(todoApp);

ReactDOM.render( 
    <Provider store={todoAppStore}>
      <TodoApp todos={todoAppStore.getState().todos} /> 
    </Provider> , 
    document.getElementById('app')
);
