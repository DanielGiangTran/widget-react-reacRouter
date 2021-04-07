import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
// import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS liabrary among developers",
  },
  {
    title: "How do you use?",
    content: "You use React by creating components",
  },
];
const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "The Color Blue", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/list">
            <Search />
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
          <Route path="/dropdown">
            <Dropdown
              label="Select a color"
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          </Route>
          <Route path="/">
            <Accordion items={items} />
          </Route>
        </Switch>
      </Router>
      {/* <Route path="/">
        <Accordion items={items}></Accordion>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route> */}
    </div>
  );
};
export default App;
