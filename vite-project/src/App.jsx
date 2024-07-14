import {useState} from "react";
import { useEffect } from "react";
import ToDoList from "./components/ToDoLIst";

function App() {
  let initialTodo = [
    {
      id: 1,   
      title: "Learn Nodes",
        isCompleted: true
    },
    {
      id: 2,  
      title: "JavaScript",
        isCompleted: false
    }
];

const [todo, setTodo] = useState(initialTodo)



  return <ToDoList  todos={todo}/>
}

export default App
