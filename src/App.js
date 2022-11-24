import './App.css';
import Category from './sections/Category/Category';
import Letters from './sections/Letters/Letters';
import Score from './sections/Score/Score';

function App() {
  return (
    <div className="App">
      <Score />
      <Letters />
      <Category name="Nazwa kategorii"/>
    </div>
  );
}

export default App;
