import { Container } from "./components/Container/Container.component";
import { TaskBox } from "./components/TaskBox/TaskBox.component";
import Modal from "./components/modal/Modal.component";

import SideBar from "./components/SideBar/SideBar.component";
import logo from "./logo.svg";
import { NewTaskButton } from "./components/NewTaskButton/NewTaskButton.component";

function App() {
  const arr = new Array(5).fill(0);

  return (
    <>
      <Container>
        <SideBar open={false} />
        <div className="grid--5">
          {arr.map((element) => (
            <TaskBox />
          ))}
        </div>
      </Container>
      <Modal />
      <NewTaskButton />
    </>
  );
}

export default App;
