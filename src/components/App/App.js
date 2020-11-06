import React from 'react'
import STORE from '../../store'
import List from '../List/List'


function App(props) {
  props = STORE
  return (
    <main className='App'>
      <header class="List-header">
          <h2>First list</h2>
      </header>
      <List />
      <List />
      <List />
      <List />
    </main>
  );
}

export default App;