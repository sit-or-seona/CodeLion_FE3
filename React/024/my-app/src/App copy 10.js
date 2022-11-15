function One () {
  return <p>one</p>
}

function Two () {
  return <p>two</p>
}

function Three () {
  return <p>three</p>
}

export default function App() {
  return (
    <div>
      {/* 다중 Array라도 중복된 key값을 가지고 있으면 안됩니다! */}
      {[
        <One key='100'/>,
        <Two key='200'/>,
        <Three key='300'/>,
        [
          <One key='400'/>,
          <Two key='500'/>,
          [
            // 나와 같은 컴포넌트가 동일한 키를 가지고 있으면 Error
            // 나와 다른 컴포넌트가 동일한 키를 가지고 있으면 Error가 나지 않습니다.
            <One key='100'/>,
            <Two key='100'/>,
          ]
        ]
      ]}
    </div>
  )
}
