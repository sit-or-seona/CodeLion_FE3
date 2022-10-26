// 비공개 프로퍼티를 만드는 법
// 모듈 사용자 정의 혼합패턴
function Person() {
    let age = 30; // 비공개 프로퍼티로 만듦

    function innerPerson() { }

    innerPerson.prototype.getAge = function () {
        return age;
    }

    return innerPerson;
}

const PersonFunc = Person();
const person = new PersonFunc();

// IIFE 
// (function () {
//     console.log('IIFE');
// })();

// IIFE(즉시실행함수)를 이용한 모듈 사용자 정의 혼합패턴
const NewPerson = (
    function () {
        let age = 30;

        function innerPerson() { }

        innerPerson.prototype.getAge = function () {
            return age;
        }

        return innerPerson
    }
)();

const personWithSecret = new NewPerson();