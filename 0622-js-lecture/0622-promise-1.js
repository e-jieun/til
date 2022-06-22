// 1. 동작(모션)을 제어할 때 사용 
// 2. 통신? => 비동기 -> event-driven: 이벤트 주도 방식 -> 이벤트가 일어났을 때 무언가 열심히 한다
// 3. 어려운 이유 => 눈에 안 보이는 작업, 들여다 보는 일련의 과정이 필요
// 자바스크립트는 동기, 비동기가 다른 언어에 비해서 상당히 수월

// ?호이스팅(hoisting): 함수는 최상급 취급을 받으므로 전역에서 언제든지 콜링 가능
// console.log(typeof text()); //string  //호출

function text(){  //선언
  return `
  <div>hello</div>
  `;
}

function section(){
  return `
  <section>bye</section>
  `;
}

// ?동기, 비동기 제어 => 실행을 멈출 수도 있다?
// console.log(typeof text()); //string  //호출

// 순서대로 호출 => 동기 방식
// console.log(text());
// console.log(section());

// 먼저 실행할 수 있는 것부터 => 비동기 방식 => 순서가 역전
// let timer = setTimeout(() => {
//   console.log(text());
// }, 0);
// console.log(section());

// *비동기 함수 => 콜백함수로 동기 실행시키기 -> 콜백지옥
let timerA = setTimeout(() => {
  console.log(text());
  let timerB = setTimeout(() => {
    console.log(section());
  }, 0);
}, 1000);

// ?순서를 어기는 setTimeout() => 먼저 완료된 것부터 바로 실행한다 -> 위아래가 없다(순서가 없다): 비동기 함수가 기본이기 때문
// 실행방식 event loop
// ?옛날 방식 함수 안에 함수를 넣어서 해결 => 콜백지옥