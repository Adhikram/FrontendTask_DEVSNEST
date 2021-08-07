import React from 'react'
import './App.css';
import Count from './Component/Count'
function App() {
  return (
    <div className="App">
      <div className="header">
        React Counter 
      </div>
      {[...Array(4)].map((x, i) =>
          <Count key={i} />
        )}
    </div>
  );
}

export default App;
