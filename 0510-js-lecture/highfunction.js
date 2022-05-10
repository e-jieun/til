// 알고리즘의 본체
// 고차함수(higher order function): 제작자가 만드는 것 => 작성법이 아니라 알고리즘 제작법
// 함수 하나만 사용하진 않는다

// 지금까지의 함수는 1차 함수

// 고차함수의 기본형
function typeA(){
  console.log('i was car');
}
// 함수는 선언되면 최상위 전역이기 때문에 호출을 어디서 하든 상관없음

function typeB(){
  // typeB의 함수 알고리즘은 문자열을 콘솔에 찍어주고 나서
  // 그 다음으로 함수 typeA()를 호출해준다
  console.log('나는 날개달린 호랑이');
  typeA();
}
// typeB();

// ----------------------------------------------------------------

// 고차함수
// 이벤트 세개를 고차함수로 바인딩했다
function typeC(target){
  // target.addEventListener('click', function(){});
  // callback function에서 사용하는 경우 arrow function을 사용하는 경우가 많다
  target.addEventListener('click', ()=>{});
  target.addEventListener('scroll', function(){});
  target.addEventListener('wheel', function(){});
}
// 그러면 typeC의 인수로 컨테이너나 아이템 태그를 넣어주면 언제든지 적용할 수 있다
// => 고차함수의 큰 특성
typeC(root);

// ====================================================================

/* 1차 함수 한개만 있는 함수
고차함수(함수 여러개를 묶어서 작동시키는 방식) === 바인딩(binding => 묶였다)
함수로 묶이는 경우, 객체로 묶이는 경우(메서드화가 된다) */

// 객체
const typeP = {
  // console.log();의 구조
  // 메서드화
  // 객체 지향형
  // 알고리즘이 많아지면 객체화시켜서 리팩토링
  objectA: function(string){
    console.log(string);
  },
  objectB: function(){

  }
}

// typeP.objectA('hello');

console.log(console);
// Object [console] {
//   log: [Function: log],
//   warn: [Function: warn],
//   dir: [Function: dir],
//   time: [Function: time],
//   timeEnd: [Function: timeEnd],
//   timeLog: [Function: timeLog],
//   trace: [Function: trace],
//   assert: [Function: assert],
//   clear: [Function: clear],
//   count: [Function: count],
//   countReset: [Function: countReset],
//   group: [Function: group],
//   groupEnd: [Function: groupEnd],
//   table: [Function: table],
//   debug: [Function: debug],
//   info: [Function: info],
//   dirxml: [Function: dirxml],
//   error: [Function: error],
//   groupCollapsed: [Function: groupCollapsed],
//   Console: [Function: Console],
//   profile: [Function: profile],
//   profileEnd: [Function: profileEnd],
//   timeStamp: [Function: timeStamp],
//   context: [Function: context]
// }

console.log(console.table['hello', 'test', 'table']);