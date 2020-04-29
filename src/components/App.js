import React from 'react';
import Header from './Header';
import Hangman from './Hangman';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        < Hangman />
      </React.Fragment>
    </div>
  );
}

export default App;
