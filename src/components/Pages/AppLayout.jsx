import { Container } from "./components/Container/Container.component";
import { TaskProvider } from "./components/contexts/TaskContext";
import { TaskBox } from "./components/TaskBox/TaskBox.component";
import Button from "./components/Button/Button.component";
import Modal from "./components/modal/Modal.component";

import { useReducer } from "react";
import { NewTaskButton } from "../NewTaskButton/NewTaskButton.component";

const initialState = {
  modal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "toogleModal":
      return { ...state, modal: !state.modal };

    default:
      throw new Error("Unkown action");
  }
}

function AppLayout() {
  const [{ modal }, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskProvider>
      <Container />
      <Modal modal={modal} dispatch={dispatch} />
      <Button onClick={() => dispatch({ type: "toogleModal" })}>Open</Button>
      <NewTaskButton />
    </TaskProvider>
  );
}

export default AppLayout;
