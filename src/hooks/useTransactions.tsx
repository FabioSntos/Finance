import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

import { ReactNode } from "react";

// const TransactionsContext = createContext<ITransactionsContextData>(
//   {} as ITransactionsContextData
// );

// export const TransactionsProvider = ({
//   children,
// }: ITransactionsProviderProps) => {
//   const [transactions, setTransactions] = useState<ITransaction[]>([]);

//   useEffect(() => {
//     api
//       .get("transactions")
//       .then((res) => setTransactions(res.data.transactions));
//   }, []);

//   async function createTransaction(transactionInput: ITransactionInput) {
//     const response = await api.post("/transactions", {
//       ...transactionInput,
//       createdAt: new Date(),
//     });
//     const { transaction } = response.data;

//     setTransactions([...transaction, transaction]);
//   }

//   return (
//     <TransactionsContext.Provider value={{ transactions, createTransaction }}>
//       {children}
//     </TransactionsContext.Provider>
//   );
// };

// export function useTransactions() {
//   const context = useContext(TransactionsContext);

//   return context;
// }

//novo

interface ITransactions {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type ITransactionInput = Omit<ITransactions, "id" | "createdAt">;

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionsContextData {
  transactions: ITransactions[];
  createTransaction: (transaction: ITransactionInput) => void;
}

const TransactionContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
);

export const TransactionProvider = ({
  children,
}: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: ITransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const contex = useContext(TransactionContext);
  return contex;
};
