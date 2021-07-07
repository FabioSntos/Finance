import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes";

import { createServer } from "miragejs";

import GlobalStyles from "./styles/GlobalStyles";

createServer({
  routes() {
    //rotas
    this.namespace = "api"; //ao captar os dados da api pelo front, irá trazer dados a partir do namespace "api"

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transacion 1",
          amount: 400,
          type: "deposit",
          category: "food",
          createdAt: new Date(),
        },
      ];
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
