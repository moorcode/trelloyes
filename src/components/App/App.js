import React from "react";
// import STORE from "../../store";
import List from "../List/List";

function App() {
  return (
    <main className="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        <List />
        <List />
        <List />
        <List />
      </div>
    </main>
  );
}

export default App;
