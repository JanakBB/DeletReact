function ToDoList() {
    let toDo = [
        {
            title: "Learn Nodes",
            isCompleted: true
        },
        {
            title: "JavaScript",
            isCompleted: "false"
        }
    ]

    let todoviews = toDo.map((todo) => {
        return (
            <div className="border shadow p-3 m-2">
                <p className="lead">{todo.title}</p>
                <span>{todo.isCompleted ? "Complete" : "Pending"}</span>
            </div>
        )
    });

    return todoviews;
}

export default ToDoList;