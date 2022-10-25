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