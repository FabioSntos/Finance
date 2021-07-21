import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes";

import { createServer, Model } from "miragejs";

import GlobalStyles from "./styles/GlobalStyles";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Conta de água",
          type: "withdraw",
          category: "despesas",
          amount: 160,
          createdAt: new Date("2021-05-10 21:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "despesas",
          amount: 750,
          createdAt: new Date("2021-05-10 21:00:00"),
        },
        {
          id: 3,
          title: "Trabalho",
          type: "deposit",
          category: "salário",
          amount: 3500,
          createdAt: new Date("2021-05-10 21:00:00"),
        },
      ],
    });
  },

  routes() {
    //rotas
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
