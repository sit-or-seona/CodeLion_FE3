// 클래스의 기본 모습
class Robot {
    // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
    // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
    constructor(name) {
        this.name = name;
    }

    // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}


// 생성자 함수를 class 문법으로 전환하기
function Student(level) {
    this.level = level;
}

Student.prototype.levelUp = function () {
    this.level++;
}

function Me(name, address, phoneNum) {
    this.name = name;
    this.address = address;
    this.phoneNum = phoneNum;
}

Me.prototype.canWalk = function () {
    console.log('재현이가 걷는다.');
}

Me.prototype.teaching = function (student) {
    student.levelUp();
}


class Me {
    constructor(name, address, phoneNum) {
        this.name = name;
        this.address = address;
        this.phoneNum = phoneNum;
    }

    canWalk() {
        console.log('웨이드가 걷는다');
    }

    teacing(student) {
        student.levelUp();
    }
}

class Student {
    constructor(level) {
        this.level = level;
    }

    levelUp() {
        this.level++;
    }
}

const me = new Me('sadf', 'asdfasf', '123123');
const student = new Student(1);


// const me = {
//     name: '선아',
//     address: '서울',
//     mbti: 'INFJ',
//     favorite: '피낭시에💜'
// }

// class Me {
//     constructor(person) {
//         this.name = person.name;
//         this.address = person.address;
//         this.mbti = person.mbti;
//         this.favorite = person.favorite;
//     }

//     sayYourInfo() {
//         console.log(`제 이름은 ${this.name}이고, ${this.address}에 사는 ${this.mbti}입니다. 요즘 빠져있는 건 ${this.favorite}에요!`)
//     }
// }


// const seona = new Seona(me);