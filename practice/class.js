class Jay {
  constructor(name, age, mbti) {
    this.name = name;
    this.age = age;
    this.mbti = mbti;
  }
  question() {
    return console.log(
      `나는 ${name}!, ${age}살이고, ${mbti}라는 mbti를 가지고있어`
    );
  }
}

const aboutMe = new Jay("Jay", 25, "ENFP");
console.log(Jay.name);
console.log(Jay.age);
console.log(Jay.mbti);
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

class gameUser {
  constructor(name, hp, mp) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    console.log(`이 사용자는 ${name}! 체력: ${hp} 마나:${mp}입니다.`);
  }

  move(position) {
    console.log(`${this.name}은 ${position}으로 이동합니다.`);
  }

  attack(damage) {
    console.log(
      `${this.name}은 앞에 있는 적을 공격하여 ${damage}의 데미지를 입힙니다.`
    );
  }
}
