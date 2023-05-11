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
