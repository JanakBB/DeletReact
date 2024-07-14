import {useState, useEffect} from "react";

function ToDoList({todos}) {
    const [data, setData] = useState(todos);

    const deleteTodo = (id) => {
        setData(data.filter((d) => d.id !== id));
    };

    const updateTodo = (id) => {
        let selectedTodo = todos.find((t) => t.id === id);
        selectedTodo.isCompleted = true;
        setData([...todos]);
    }
    
    let todoviews = data.map((todo) => {
        return (
            <div className="border shadow p-3 m-2" key={todo.id} >
                <p className="lead">{todo.title}</p>
                {todo.isCompleted ? (
                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                ) : (
                    <button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Mark Complete</button>
                )}
            </div>
        )
    });

    return todoviews;
}

export default ToDoList;