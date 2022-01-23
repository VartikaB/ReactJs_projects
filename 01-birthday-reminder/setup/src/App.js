import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return <main>
    <section className='container'>
      <h3>Test 1</h3>
      <list/>
      <button onClick={()=> console.log("you clicked me")}>Clear All</button>

    </section>

  </main>
}

export default App;
