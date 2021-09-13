import { Link, Route, Switch } from "react-router-dom";
import Camper from "./Camper";
import Home from "./Home";

function App() {
  return (
    <main>
      <h1>
        <Link to="/">Working Fun</Link>
      </h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/employees/:id">
          <Camper />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
