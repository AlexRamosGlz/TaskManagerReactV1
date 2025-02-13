import { act, createContext, useState } from "react";

const TaskContext = createContext();

const BASE_URL = `http://localhost:3000/tasks/tsk`;

function reducer(state, action) {
  switch(action.type) {
    case "task/create": return {...state};
  }
}

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  async function getTasks(filters) {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setTasks(data);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskProvider };
