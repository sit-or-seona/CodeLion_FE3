// 10월 11일 연습문제 과제

// 1번
let arr = [10, 20, 30, 10, 20, 30, 40, 10];

function solution1(arr){
    let 평균 = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
    let 분산 = arr.reduce((acc, cur) => acc + (cur - 평균) ** 2, 0) / arr.length;
    let 표준편차 = 분산 ** 0.5;

    return [평균, 분산, 표준편차];
}

console.log(solution1(arr));

// 2번
let str = '5, 4, 10, 2, 5';

function solution2(str){
    let arr = str.split(',').map(Number);
    let sum = arr.reduce((acc, cur) => acc + cur, 0);

    return sum / arr.length;
}

console.log(solution2(str));

// 3번
let arr2 = [11, 22, 33, 111, 2];

function solution3(arr2){
    let str = arr2.join('');
    let result = 0;
    for(let i of str){
        result += i*1;
    }
    return result;
}

console.log(solution3(arr2));

// 4번
function solution4(n){
    let result = '';
    for(let i = n.length-1; i >= 0; i--){
        result = n[i] + result;
        if(i !== 0 && (n.length - i) % 3 === 0){
            result = ',' + result;
        }
    }
    return result;
}

console.log(solution4('1000000000'));


// 5번 로또 만들기
function solution5(){
    let lotto = [];
    for(let i = 0; i < 6; i++){
        lotto.push(Math.floor(Math.random()*45 + 1));
    }
    return lotto;
}

console.log(solution5());

