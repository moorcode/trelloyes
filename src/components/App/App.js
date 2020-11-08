import React from "react";
import STORE from "../../store";
import List from "../List/List";
// import Card from "../Card/Card";

function App() {
  const lists = STORE.lists;
  const listTitleArray = lists.map((item) => 
  <List listTitle={item.header}/> ) //First List ..
  console.log(lists)
  return (
    <main className="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {listTitleArray}
      </div>
    </main>
  )
}

export default App;