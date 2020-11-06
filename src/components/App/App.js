import React from 'react'
import STORE from '../../store.js'


function App(props) {
  props = STORE
  return (
    <main className='App'>
      <header class="List-header">
          <h2>First list</h2>
      </header>
    </main>
  );
}

export default App;