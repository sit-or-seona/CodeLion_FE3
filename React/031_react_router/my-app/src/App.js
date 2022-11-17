import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index(){
  return <div>index</div>
}

function A(){
  return <div>A</div>
}

function B(){
  return <div>B</div>
}

function C(){
  return <div>C</div>
}

function C1(){
  return <div>C1</div>
}

function C2(){
  return <div>C2</div>
}

function Cd(){
  return <div>Cd</div>
} 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/a" element={<A />}/>
        <Route path="/b" element={<B />}/>
        <Route path="/c" element={<C />}/>
        <Route path="/c/1" element={<C1 />}/>
        <Route path="/c/2" element={<C2 />}/>
        <Route path="/c/d" element={<Cd />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;