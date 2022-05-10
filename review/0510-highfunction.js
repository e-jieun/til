// 고차함수(higher order function): 제작자가 만드는 것 => 작성법이 아닌 알고리즘 제작법이다(알고리즘의 본체)
// 함수를 하나만 사용하진 않는다
// === 지금까지 사용해온 것은 1차 함수에 불과하다

// 고차함수의 기본형
// 함수의 특징: 함수는 선언되기만 하면 우선순위가 최상위로 작동하고 전역스코프이기 때문에 호출을 어느 곳에서 해도 상관없다
function typeA(){
  console.log('typeA');
}
function typeB(){
  // function typeB는 콘솔에 문자열을 기록하고 나서
  console.log('typeB');
  // 그 다음으로 function typeA();를 호출해준다
  typeA();
}
typeB();

// -----------------------------------------

// 고차함수로 바인딩하기
// => 이벤트 3개를 고차함수로 바인딩하기

function bindingEvents(target){
  target.addEventListener('click', (event) => {event.target.style.color = 'red';})
  target.addEventListener('mouseover', event => {event.target.style.color = 'yellow';})
  // => callback function에서 사용할 경우 arrow function을 사용하는 경우가 많음
  target.addEventListener('wheel', changeColorFunction);
}
// callback function
// 기명함수처럼 이름을 작성해준다
function changeColorFunction(event){
  event.target.style.color = 'black';
}

// function bindingEvents의 인수로 컨테이너, 아이템 태그를 넣어주면 언제든지 적용할 수 있음
// => 고차함수의 큰 특징
// bindingEvents(div);

// ===============================

/* 1차 함수: 한 개의 함수
고차함수(함수 여러개를 묶어서 작동시키는 방식) => binding
함수로 묶이는 경우, 객체로 묶이는 경우(메서드화가 된다)
 */ 

// --------------------------------

const typeObj = {
  objectOne: function(string){
    console.log('1');
  },
  objectTwo: function(string){
    console.log('2');
  }
}

typeObj.objectOne();

// console에도 다양한 메서드가 존재한다
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

// .table은 작성을 배열로 해줘야 한다
// 인덱스를 포함한 표 형식(table 형식)으로 나타난다
// console.table(['1','2','3']);
console.log(console.table(['1','2','3']));
