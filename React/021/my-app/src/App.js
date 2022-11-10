function One(props){
  return (
    <div>
      <p>{props.name}님 안녕하세요!</p>
      <p>당신의 나이는 {props.age * 100}입니다.</p>
    </div>
  )
}

function Two({name, age}){
  return (
    <div>
      <p>{name}님 안녕하세요!</p>
      <p>당신의 나이는 {age * 100}입니다.</p>
    </div>
  )
}

function App() {
  return (
    <>
      <p>hello world 1</p>
      <p>hello world 2</p>
      <One name="선아" age={26}/>
      <Two name="선아" age={26}/>
    </>
  );
}

export default App;