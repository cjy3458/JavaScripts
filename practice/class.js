class Yay {
  constructor(name, age, mbti) {
    this.name = name;
    this.age = age;
    this.mbti = mbti;
  }
  question() {
    return console.log(
      `나는 ${this.name}!, ${this.age}살이고, ${this.mbti}라는 mbti를 가지고있어`
    );
  }
}

const aboutMe = new Yay("Jay", 25, "ENFP");
console.log(aboutMe.name);
console.log(aboutMe.age);
console.log(aboutMe.mbti);
aboutMe.question();

class dong {
  constructor() {
    this.name = "GILDONG";
    this.age = 12;
  }
}

const aboutDong = new dong();
console.log(aboutDong.name);
console.log(aboutDong.age);

// 상속용 부모 class
class gameUser {
  constructor(name, hp, mp) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    console.log(`이 사용자는 ${name}! 체력: ${hp} 마나:${mp} 입니다.`);
  }

  move(position) {
    console.log(`${this.name}은 ${position}으로 이동합니다.`);
  }

  attack(damage) {
    console.log(
      `${this.name}은 앞에 있는 적을 공격하여 ${damage}의 데미지를 입힙니다.`
    );
  }
  state(health) {
    console.log(
      `${this.name}은 현재 hp: ${this.hp} / mp: ${this.mp} 상태로 ${health}입니다.`
    );
  }
}

// 상속받는 자식 클래스

class Jay extends gameUser {
  warrior(hero) {
    console.log(`이 사용자는 '${hero}'직업군 입니다.`);
  }
}

a = new Jay("재영", 1000, 4500);
a.warrior("전사");

let Jay = {
  name: "Jay",
  num: 1,
};

let Young = {
  name: "Young",
  num: 2,
};

let Choi = {
  name: "Choi",
  num: 3,
};

class Student {
  constructor(name, num) {
    this.name = "Jay";
    this.num = 1;
  }
}

const 재 = new Student();
const 영 = new Student();

console.log(재);
console.log(영);

class 반장 extends Student {
  constructor(props) {
    super(props);
    
  }
}