import {RECEIVE_TODOS} from '../actions/todo_actions.js'
import {RECEIVE_TODO} from '../actions/todo_actions.js'
import { REMOVE_TODO } from '../actions/todo_actions.js'


const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };
  


export const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    

    switch (action.type) {
        
        case RECEIVE_TODOS: 
            console.log(action.todos.id);
            let nextState = {};
            action.todos.forEach((ele) => {
              nextState[ele.id] = ele;
            });
            return nextState;

        case RECEIVE_TODO: newState[action.todo.id] = action.todo;
            console.log(action.todo);
            return newState;

        // case REMOVE_TODO: delete action.todo.id;
            
        default:
           
            return state;
            


    }
};

export default todosReducer;