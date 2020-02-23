import React from "react";
import { Header } from "./components/Header";
import { LearnedFrom } from "./components/LearnedFrom";
import { Balance } from "./components/Balance";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <LearnedFrom />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
