export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        //todos: payload
        todos,
    };
};


export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo,
        //todo: payload
    };
};


export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo,
        //todo: payload
    };
}




