import styled from 'styled-components'

// One은 스타일 '컴포넌트'입니다.
// 그래서 props를 받을 수 있습니다.
const One = styled.div`
  color: red;
`

// const Two = styled.div`
//   color: green;
//   font-size: ${(props) => props.size + 'px'}
// `

// 구조 분해 할당
const Two = styled.div`
  color: green;
  font-size: ${({size}) => size + 'px'}
`

const Three = styled.div`
  color: ${(옵션) => 옵션.option === '하나' ? 'black' : 'pink'};  
`

function App() {
  return (
    <>
      <One>hello</One>
      <Two size={32}>world</Two>
      <Three option={'하'}>hello</Three>
    </>
  )
}

export default App;