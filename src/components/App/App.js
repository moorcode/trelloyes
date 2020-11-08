import React from "react";
import STORE from "../../store";
import List from "../List/List";
// import Card from "../Card/Card";

function App() {
  const lists = STORE.lists;
  const listTitleArray = lists.map((item) => 
  <List listTitle={item.header} /> ) //First List ..
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listTitleArray}
      </div>
    </main>
  )
}

export default App;