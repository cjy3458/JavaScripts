let global = "global";
global = "fgafdsafsdaf";

function jay() {
  let global = "글로벌";
  console.log(global); //다른 스코프에 동일한 이름의 식별자 사용
}

jay();

console.log("25");
