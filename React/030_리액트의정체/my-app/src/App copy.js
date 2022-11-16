// 리액트는 요소들을 경량화된 오브젝트(=버츄얼 돔)로 렌더링한다
// -> 요소의 상태가 바뀌었을 때 전체를 렌더링 하지 않고 // 변경이 일어난 요소들만 렌더링 할 수 있다는 특징이 있다
// -> 이런 특징을 이용해서 프로젝트 규모, 특징을 고려해서 리액트를 적용하는게 장점이 된다면 적용하는 게 좋다

function One(props){
  console.log('// one 시작');
  console.log(props);
  console.log('// one 끝');
}

function App() {
  return (
    <div>
      <h1>app - h1</h1>
      <p>app - p</p>
      <One>
        <h2>app &gt; One - h1</h2>
        <p>app &gt; One - p</p>
        <Two/>

      </One>
    </div>
  );
}
export default App;
