import { useState } from "react"

import One from "./pages/one/One"
import Two from "./pages/two/Two"
import Three from "./pages/three/Three"
import Four from "./pages/four/Four"
import Five from "./pages/five/Five"

const ContentsContainer = ({pageName}) => {
  if(pageName === 'one'){
    return <One/>
  } else if(pageName === 'two'){
    return <Two/>
  } else if(pageName === 'three'){
    return <Three/>
  } else if(pageName === 'four'){
    return <Four/>
  } else if(pageName === 'five'){
    return <Five/>
  }
}

const Contents = () => {
  const [pageName, setPageName] = useState("one")
  const handleCheckId = (e) => {
    setPageName(e.target.id)
  }

  return (
    <>
      <ul>
        <li id="one" onClick={handleCheckId}>One</li>
        <li id="two" onClick={handleCheckId}>Two</li>
        <li id="three" onClick={handleCheckId}>Three</li>
        <li id="four" onClick={handleCheckId}>Four</li>
        <li id="five" onClick={handleCheckId}>Five</li>
      </ul>
      <ContentsContainer pageName={pageName}/>
    </>
  )
}

export default function App() {
  return (
    <>
      <Contents/>
    </>
  )
}