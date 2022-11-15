// step 1: 컴포넌트 리스트 만들기
// const arr = [10, 20, 30, 40, 50]
// function App() {
//   return (
//     <div>
//       {arr.map(v => <p>{v}</p>)}
//       {arr.map(v => <p key={v.toString()}>{v}</p>)}
//       {/* 숫자나 문자로 key값을 사용합니다. */}
//       {arr.map(v => <p key={v}>{v}</p>)}
//     </div>
//   );
// }

// step 2: 조건부 렌더링
// const value = 3;

// function App() {
//   if(value === 1) {
//     return <h1>hello 1</h1>
//   } else if (value === 2) {
//     return <h1>hello 2</h1>
//   } else if (value === 3) {
//     return <h1>hello 3</h1>
//   }
// }

// step 3: style
// 설치 npm i styled-components
// 설치 npm i styled-reset
import styled from "styled-components"

const DivBlue = styled.div`
  color: blue;
`
const DivRed = styled.div`
  color: red;
`

function App() {
  return (
    <>
      <DivBlue>hello</DivBlue>
      <DivRed>hello</DivRed>
    </>
  )
}

export default App;