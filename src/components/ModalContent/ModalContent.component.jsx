import Button from "../Button/Button.component";

function ModalContent({ dispatch }) {
  return (
    <main className="modal-content">
      <h2>Titulo</h2>
      <Button onClick={() => dispatch({type: "toogleModal"})}>cerrar</Button>
    </main>
  );
}

export default ModalContent;
