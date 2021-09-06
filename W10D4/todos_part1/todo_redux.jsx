import React from 'react';
import ReactDOM from 'react-dom';
import {Todos_Actions} from '../todos_part1/frontend/actions/todo_actions';
import {Todo_Actions} from '../todos_part1/frontend/actions/todo_actions';
import {configureStore} from './frontend/store/store.js';
import {receiveTodo} from './frontend/actions/todo_actions.js';
import {receiveTodos} from './frontend/actions/todo_actions.js';
import { removeTodo } from './frontend/actions/todo_actions.js';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    console.log('React is working!')
    ReactDOM.render(<h1>Todos App</h1>, root)
    const store = configureStore()
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;

})

