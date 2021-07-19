import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/intex";
import { Header } from "./components/Header";
import NewTransactionModal from "./components/NewTransactionModal";
import {
  TransactionsContext,
  TransactionsProvider,
} from "./TransactionsContext";

Modal.setAppElement("#root");

const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
};

export default App;
