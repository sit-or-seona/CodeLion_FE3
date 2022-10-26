// 실습 : 소시지
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
    constructor(flavor1, flavor2, flavor3) {
        super(flavor1, flavor2);
        this.flavor3 = '🔥🔥🔥';
    }

    taste() {
        console.log(`${this.flavor1}와 ${this.flavor2}와 ${this.flavor3}맛이 난다!`);
    }
}

const mySausage = new FiresSausage('소고기', '콘옥수수');