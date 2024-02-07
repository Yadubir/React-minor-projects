import { useContext, createContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,                                // attributes for the TodoContext
            todo: "todo msg",
            completed: false           
        }
    ],
    addTodo: (todo) => {},                      // attributes for the TodoContext
    updateTodo: (id, todo) => {},               // attributes for the TodoContext
    deleteTodo: (id) => {},                     // attributes for the TodoContext
    toggleComplete: (id) => {}                  // attributes for the TodoContext
})

export const useTodo = () => {
    return useContext(TodoContext)                          
};
export const TodoProvider = TodoContext.Provider;