function a(){
    console.log(this);
}
a();

function b(){
    console.log('hello world')
}
b()
window.b()

let test1 = {
    one: 1,
    two: 2,
    three: function () {
        console.log(this);
    }
};

test1.three();
let test2 = test1.three;
test2();


// 추가 예제 //

function sayName(){
    console.log(this.name);
}

var name = 'Hero';

let peter = {
    name: 'Peter Parker',
    sayName
}

let bruce = {
    name: 'Bruce Wayne',
    sayName
}

sayName();
peter.sayName();
bruce.sayName();

function a(){
    console.log(this.name)
    function b(){
        console.log(this.name)
    }
    b()
}
a()

function a(){
    console.log(this);
    function b(){
        console.log(this);
    }
    b();
}

a(); // window, window
// 뫄뫄.a() 로 a()를 호출하는 주체가 없기 때문에 window를 출력
// 어떻게 호출되었는지로 판단하면 됩니다.
// 일반함수로 호출이 되면 전역객체 window를 가리킵니다.
// 함수가 메서드로 호출이 되면 메서드를 호출한 객체에 바인딩됩니다.