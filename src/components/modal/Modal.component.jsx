import ModalContent from "../ModalContent/ModalContent.component";

function Modal({ modal, dispatch }) {
  return (
    <div className={`${modal ? "active flex" : ""} modal`}>
      <ModalContent dispatch={dispatch} />
    </div>
  );
}

export default Modal;
