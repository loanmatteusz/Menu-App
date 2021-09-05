import { Route, Switch } from "react-router-dom";
import { CreateItem } from "./pages/CreateItem";
import { EditItem } from "./pages/EditItem";
import { ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  return (
    <Switch>
      <Route path="/edit/:id">
        <EditItem />
      </Route>
      <Route path="/create-item">
        <CreateItem />
      </Route>
      <Route path="/:id">
        <ProductPage />
      </Route>
      <Route path="/">
        <ProductsPage />
      </Route>
    </Switch>
  );
}

export default App;
