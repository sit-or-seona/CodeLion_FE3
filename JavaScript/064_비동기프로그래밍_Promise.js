/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)
*/

// - pending(대기상태) - resolve(해결) - fulfilled(성공)
// - pending(대기상태) - reject(거부) - rejected(실패)

// resolve
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello wrold')
}).then(메시지 => {
    alert(메시지) // hello world
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지) // hello
    return 메시지[0]
}).then(메시지 => {
    alert(메시지) // h
    return 메시지
})

console.log(p)
// 위 코드를 모두 실행하고 console에 찍었을 때: Promise {<fulfilled>: 'h'}
// 위 코드를 모두 실행하지 않고 console에 찍었을 때: Promise {<pending>}


// reject
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello wrold')
}).then(메시지 => {
    alert(메시지) // hello world
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지) // hello
    return 메시지[0]
}).then(메시지 => {
    alert(메시지) // h
    return 메시지
}).catch(메시지 => { // catch: 거절되었을 때 실행되는 코드입니다.
    alert('catch 실행!!')
})

console.log(p);
// catch를 만나면 fulfilled로 수정됩니다.


// resolve인데 중간에 error가 던져졌을 때
// error를 만나면 뒤에 나오는 then은 건너뛰고, catch를 실행합니다.
// catch 이후에 나오는 then은 실행합니다.
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello wrold')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => { // Error메시지가 catch로 들어옵니다.
    alert('catch 실행!!')
}).then(메시지 => {
    alert('catch 이후에 then')
    return 메시지
})

console.log(p);


// 일부러 시간이 걸리게 작업을 해보도록 하겠습니다.
let p = new Promise(function(resolve, reject){
    setTimeout(() => resolve('끝났다!'), 3000)
})
console.log('hello world');
console.log(p);

// 3초 후
console.log(p);

// 실행하지 마세요. 무한 pending에 빠집니다.
// let p = new Promise(function(resolve, reject){
//     console.log('hello world');
// }).then(d => console.log(d)).catch(e => console.log(e))


// finally는 마지막에 마무리하는 용도로 많이 사용합니다.
// 그렇지만 관습적으로 마지막에 쓰는 것이고 뒤에 이어 붙일 수도 있습니다.
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 실행!!')
}).finally(메시지=>{
    alert('catch 이후에 then')
    throw Error('Error 발생! 경고경고!')
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 이후에 then 이후에 catch 실행!!')
})

console.log(p)


// 우리가 뒤에서 배울 async나 fetch도 Promise를 반환합니다.
let test = async function(){
    return 'hello world'
}
console.log(test()) // Promise {<fulfilled: 'hello world'}

let data = fetch('http://test.api.weniv.co.kr/mall')
console.log(data) // Promise {<fulfilled>: Response}

fetch('http://test.api.weniv.co.kr/mall')
    .then(메시지 => {
        console.log(메시지)
        return 메시지.json()
    })
    .then(메시지 => {
        console.log(메시지)
    })
    .catch(메시지 => {
        // alert(메시지)
        alert('홈페이지가 정상적으로 작동하지 않고 있습니다. 조치중이오니 잠시만 기다려주시기 바랍니다.')
        console.log(메시지);
    })


// 프로미스 체이닝의 다른 형태
// 모던 자바스크립트 예제
let p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 10000); // (*)
});

console.log('hello world');
// code 1000줄

let p2 = p.then(function(result) { // (**)
    console.log(result); // 1
    return result * 2;
});

console.log('hello world2');
// code 1000줄

let p3 = p2.then(function(result) { // (***)
    console.log(result); // 2
    return result * 2;
});

console.log('hello world3');
// code 1000줄

let p4 = p3.then(function(result) {
    console.log(result); // 4
    return result * 2;
});


// 프로미스 체이닝이 아님!
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});