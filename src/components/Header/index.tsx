//aseets
import logoImg from "../../assets/logo.svg";

//styles
import { Container, Content } from "./styles";

import Modal from "react-modal";
import { useState } from "react";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Finance" />
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
