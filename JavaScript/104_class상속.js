// class 문법은 상속입니다.
class Robot {
    constructor(name) {
        this.name = name;
    }
    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

// BabyRobot 클래스가 Robot 클래스를 상속 받습니다.
class BabyRobot extends Robot {
    constructor(name) {
        // 상속을 받기 위해서 super 함수를 반드시 사용해야 합니다.
        // 만약 생성자 함수(constructor)가 없다면 super함수가 자동으로 호출됩니다.
        // 생성자 함수에서 this 값을 사용할 경우 super 함수가 this보다 먼저 실행되어야 합니다.
        super(name);
        this.ownName = '아이크';
    }


    sayBabyName() {
        // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
        this.sayYourName();
        console.log('Suceeding you, Father!');
    }
}

const babyRobot = new BabyRobot('브랜든');


// 실습 : 소시지를 만드는 클래스를 정의해봅시다.
// 1. 생성자 함수는 두 가지 매개변수를 전달 받을 수 있으며 전달되는 매개변수에 따라 소시지의 맛이 결정됩니다.
// 2. 소시지 객체는 taste 라는 메서드가 존재합니다. 생성자함수에서 전달받은 재료에 따라 맛을 나타내는 콘솔로그를 출력하는 역할을 합니다. (예시 : ‘소고기’ 와 ‘파’ 를 매개변수로 전달하였을 경우, ‘소고기와 파 맛이 난다!’ 는 콘솔 메세지를 출력합니다.)
// 3. 소시지 클래스를 상속받는 FiresSausage 파생클래스를 생성해봅니다. 파생클래스의 taste 메서드를 실행하면 콘솔 메세지에 불맛이 나기 시작합니다.

class Sausage {
    constructor(flavor1, flavor2) {
        this.flavor1 = flavor1;
        this.flavor2 = flavor2;
    }

    taste() {
        console.log(`${this.flavor1}와 ${this.flavor2} 맛이 난다!`);
    }
}

class FiresSausage extends Sausage {
    taste() {
        console.log(`🔥 ${this.flavor1}와 ${this.flavor2} 맛이 난다!🔥`);
    }
}

const firesSausage = new FiresSausage('콘옥수수', '소고기');