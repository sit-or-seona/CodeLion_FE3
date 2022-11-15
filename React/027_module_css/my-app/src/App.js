import One from './components/one/One'
import Two from './components/two/Two'
// import './app.css'
// import './app.module.css'
import styles from './app.module.css'

function App() {
  return (
    <>
      <h1>hello world</h1>
      <p className={styles.contents}>hello world</p>
      <One/>
      <Two/>
    </>
  );
}

export default App;