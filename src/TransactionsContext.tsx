import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";
import { ReactNode } from "react";
interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface ITransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<ITransaction[]>([]);

export const TransactionsProvider = ({
  children,
}: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
};
