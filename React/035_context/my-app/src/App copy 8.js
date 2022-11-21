import React from 'react'

// 문제: props를 사용하지 마시고 data.js에서 변수를 load해와서
// useContext를 사용하여 다음을 구현합니다.
// 1. Three에서 7개 아이템의 이름만 출력합니다.
// 2. Four에서 7개 아이템의 가격만 출력합니다.

function One(){
  return(
    <Two />
  )
}

function Two(){
  return(
    <Three />
  )
}

// 7개 아이템의 이름만 출력합니다.
function Three(){
  return(
    <Four />
  )
}

// 7개 아이템의 가격만 출력합니다.
function Four(){
  return(
    <div>가격</div>
  )
}

export default function App() {
  return (
    <div>
      <One />
    </div>
  )
}
