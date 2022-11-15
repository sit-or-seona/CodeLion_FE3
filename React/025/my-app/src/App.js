import One from "./pages/one/One"
import Two from "./pages/two/Two"
import Three from "./pages/three/Three"
import Four from "./pages/four/Four"
import Five from "./pages/five/Five"

export default function App() {
  return (
    <ul>
      <li onClick={One}>One</li>
      <li onClick={Two}>Two</li>
      <li onClick={Three}>Three</li>
      <li onClick={Four}>Four</li>
      <li onClick={Five}>Five</li>
    </ul>
  )
}