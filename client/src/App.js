import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ContributorsPage from "./pages/ContributorsPage";
import ContributionsPage from "./pages/ContributionsPage";

// Import components
import Header from "./components/Header";

const App = () => {
  const [contributors, setContributors] = useState([
    {
      id: 1,
      name: "Robbert Vermeulen",
      bio: "React developer from The Netherlands.",
    },
    {
      id: 2,
      name: "Tim Cook",
      bio: "CEO of Apple inc.",
    },
    {
      id: 3,
      name: "Kees de hond",
      bio: "Ook een beschrijving.",
    },
    {
      id: 4,
      name: "Jan van Tuin",
      bio: "Ook een beschrijving.",
    },
  ]);

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contributors">
          <ContributorsPage contributors={contributors}></ContributorsPage>
        </Route>
        <Route exact path="/contributions" component={ContributionsPage} />
      </Switch>
    </Router>
  );
};

export default App;
