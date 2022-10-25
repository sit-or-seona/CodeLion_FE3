// 객체 지향 프로그래밍
// 나를 추상화하고 상호 작용하는 메서드를 만들어 봅시다.
const me = {
    name: '선아',
    address: '서울',
    mbti: 'INFJ',
    favorite: '피낭시에💜',
    eating(sweets) {
        sweets.qtyDown();
    }
}

const cookies = {
    qty: 10,
    qtyDown() {
        this.qty--;
    }
}

console.log(me.eating(cookies));
console.log(cookies); // {qty: 9, qtyDown: ƒ}


// 생성자 함수
function NewFactory(name){
    this.name = name;
    this.sayYourName = function(){
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

let robot1 = new NewFactory('브랜든');
let robot2 = new NewFactory('웨이드');


function Me(name, address, mbti){
    this.name = name;
    this.address = address;
    this.mbti = mbti;
    this.sayName = function() {
        return `안녕하세요, 제 이름은 ${this.name}입니다.`
    }
}

const seona = new Me('선아', '서울', 'INFJ');


// 음식 이름의 배열을 전달하면 배열 안에서 랜덤하게 메뉴를 뽑아내는 로봇객체의 생성자를 만들어 보세요.
// 1. 생성자 함수 내 메서드 정의
// const lunchMenu = ['떡볶이', '파스타', '고기', '샌드위치'];
// const dinnerMenu = ['물', '주먹밥', '계란', '계란빵', '레몬에이드', '호빵', '매실차'];


// function MenuBot(arr) {
//     this.menus = arr;
//     this.pickMenu = function() {
//         return this.menus[Math.floor(Math.random() * this.menus.length)];
//     }
// }

// const dinner = new MenuBot(dinnerMenu);


// 2. 프로토타입에 메서드 등록
const lunchMenu = ['떡볶이', '파스타', '고기', '샌드위치'];
const dinnerMenu = ['물', '주먹밥', '계란', '계란빵', '레몬에이드', '호빵', '매실차'];


function MenuBot(arr) {
    this.menus = arr;
}

MenuBot.prototype.pickMenu = function() {
    return this.menus[Math.floor(Math.random() * this.menus.length)];
}

const dinner = new MenuBot(dinnerMenu);


console.log(MenuBot.prototype === dinner.__proto__); // true


