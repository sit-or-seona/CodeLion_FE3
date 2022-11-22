import One from './components/One/One'
import Two from './components/Two/Two'
import Three from './components/Three/Three'
import './app.css'

function App() {
  return (
    <main>
      <button>사각형</button>
      <button>둥근사각형</button>
      <button>원</button>
      <br />
      <br />
      <br />
      <One />
      <Two />
      <Three />
    </main>
  );
}

export default App;
