import Modal from "react-modal";
import { Container } from "./styles";

//assets
import closeImg from "../../assets/close.svg";

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="React-modal-close"
      >
        <img src={closeImg} alt="fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input placeholder="categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
