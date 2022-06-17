// todo: 비동기 함수인 setTimeout()을 어떻게 순차적으로 작동하도록 만들어 줄 수 있을까?
// console에 찍히는 원래 의도한 나와야 하는 순서다


// // todo: Promise 생성자를 통해서 동기 처리
// // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
// function dTimer(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('4번째 1초 후 실행');
//     }, 1000);
//   })
// }

// function eTimer(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('5번째 1초 후 실행');
//     }, 1000);
//   })
// }

// ?async function 선언은 AsyncFunction객체를 반환하는 하나의 비동기 함수를 정의합니다. 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로, 암시적으로 Promise를 사용하여 결과를 반환합니다. 그러나 비동기 함수를 사용하는 코드의 구문과 구조는, 표준 동기 함수를 사용하는것과 많이 비슷합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function

// ?Promise() 생성자 함수를 사용하면 동작 순서를 동기, 비동기 원하는대로 제어가 가능
// todo: 이해했을때의 기술적 이득
// ?1. 순서를 동시(병렬적으로 비동기방식)에 진행을 제어할 수 있다.
// ?2. 순서를 필요한 만큼 순서에 따라 (직렬적으로 동기방식)으로 진행을 제어할 수 있다.
// ?3. 리턴과 메서드 체인을 주로 사용하기때문에 코드의 규모가 커질 수록 현재의 예제보다 훨씬 직관적인 구조를 만들 수 있고, 디버깅에도 매우 용이하다.
// ?4. 동작을 제어하는 setInterval, setTimeout 등등 기본 비동기 함수를 편안하게 순서제어를 할 수 있기 때문에 인터렉티브 웹작업에서 매우 유용하다.
// ?5. 프로그래밍 엔진 내부에서 동작하는 고도의 프로세스이기 때문에 학습비용이 많이 들지만 그에 상응하는 컴퓨팅 이해를 확보 할 수 있다.

// let aTimer = setTimeout(() => {
//   console.log(1);
//   // 콜백함수를 사용해서 실행시키는 구조를 사용한 부분, 가용성이 떨어짐
//   // ?실행주기와 관계없이 실행되는 콜백함수로 실행되는 것
//   let bTimer = setTimeout(() => {
//     console.log(2);
//     let cTimer = setTimeout(() => {
//       console.log(3);
//     }, 1000);
//   }, 2000);
// }, 3000);

// ?then() 메서드는 Promise (en-US)를 리턴
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// ?두 개의 콜백 함수를 인수로 받음, 하나는 Promise가 이행했을 때(resolve), 다른 하나는 거부했을 때(reject)를 위한 콜백 함수입니다
function first() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1번째 실행');
      // 이행
      resolve();
    }, 3000);
  })
}
// ?.then() 메서드는 Promise를 리턴한다, new Promise(resolve, reject)를 인수로 받는데, 하나는 해결됐을 때, 다른 하나는 거부 됐을 때의 콜백함수
// first().then() => first()라는 함수의 Promise() 리턴
first().then(()=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('2번째 실행');
        // 이행
        resolve();
      }, 2000);
    })
// Promise를 리턴 
}).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('3번째 실행');
        // 이행
        resolve();
      }, 1000);
    })
})

// ?resolve()
// ?Promise.resolve(value) 메서드는 주어진 값으로 이행하는 Promise.then 객체를 반환
// ?그 값이 프로미스인 경우, 해당 프로미스가 반환
// ?그 값이 thenable(예, "then" 메소드 가 있음)인 경우, 반환된 프로미스는 그 thenable을 "따르며"(then의 콜백함수를 실행), 그 최종 상태를 취합니다
// ?그렇지 않으면 반환된 프로미스는 그 값으로 이행(resolve)
// ?이 함수는 프로미스형의 객체(무언가를 결정하는 프로미스를 결정하는 프로미스 등)의 중첩된 레이어를 단일 레이어로 펼칩니다
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve