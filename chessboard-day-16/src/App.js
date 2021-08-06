import './App.css';
import Cell from './Components/Cell'
import Tags from './Components/Tags'
function App() {
  return (
    <div className="App">
      <div class="top">
        <Tags/>
      </div>
      {[...Array(64)].map((x, i) =>
          <Cell key={i} />
        )}

      <div class="bottom">
        <Tags/>
      </div>
    </div>
  );
}

export default App;
