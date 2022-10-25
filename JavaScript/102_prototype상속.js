// 부모 생성자를 상속받는 방법
function Parent() {
    this.name = '재현';
}
Parent.prototype.rename = function (name) {
    this.name = name;
}
Parent.prototype.sayName = function () {
    console.log(this.name);
}

function Child() {
    // Child 함수의 this가 Parent 함수의 this를 참조합니다.
    Parent.call(this);
}

// Object.create 함수는 주어진 인자를 Child.prototype에 연결하는 역할을 합니다.
// 즉 Parent 객체의 프로토타입을 child 객체의 프로토타입이 참조하게 합니다.
Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
    console.log('now i can walk!!');
}