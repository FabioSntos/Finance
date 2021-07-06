import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
