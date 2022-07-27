// // *절차형으로 비동기를 동기 방식으로 처리하는 방법
// // *우선 Promise 생성자로 작성해보기로
// // todo: psuedo1. 원해는 setTimeout의 delay 간격이 빠른 순서대로 출력됨(비동기 방식) => 동기 방식으로 처리해보자
// // todo: psuedo2. one -> 3000/two -> 2000/three -> 1000
// // todo: psuedo3. 역순으로 출력이 되도록 해야한다
// // todo: psuedo4. 모두 출력되고 나서 출력이 끝났습니다라는 메시지를 콘솔에 기록되도록 한다

// function one(){
//   //* 약속한대로 실행이 되면 resolve, 거절(실행되지 않으면)되면 reject
//   return new Promise((resolve, reject) => {
//     // *3000ms 후에 실행되는 부분
//     setTimeout(() => {
//       console.log('func one resolved');
//       resolve();
//     }, 3000);
//   });
// }

// one().then(() => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('one().then() resolved');
//       resolve();
//     }, 2000);
//   })
// }).then(() => {
//   return new Promise((resolve, reject) => {
//     console.log('one().then().then() resolved');
//     resolve();
//   }, 1000);
// });

// *선언형으로 위 작업을 처리하는 방법
//* async, await으로 위 과정을 처리해보자
// ?https://ko.javascript.info/async-await
/*
  ?function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환
  ?프라미스가 아닌 값을 반환하더라도 이행 상태의 프라미스(resolved promise)로 값을 감싸 이행된 프라미스가 반환되도록 한다
 */
// *async, wait === new Promise()
function funcA(){
  // return setTimeout(() => {
    // console.log('first');
    return 1;
  // }, 2000);
}
function funcB(){
  // return setTimeout(() => {
    // console.log('second');
    return 2;
  // }, 1000);
}
function funcC(){
  return 3;
}
//? 동기적으로 처리는 되지만 콘솔이 기록되도록 순서를 적어준 부분은 비동기적으로 처리가 됐다
//! return을 그냥 number 타입으로 간단히 설정하고 테스트했더니 작성한대로 인터프리터 방식으로 읽어들여서 동기적으로 처리가 가능
//! setTimeout을 함수 자체에 줬어서 함수 선언부에 return을 setTimeout으로 줘서 생긴 이상한 출력
async function actionFunc(){
  let result;
  result = await funcC();
  console.log(result);
  result = await funcB();
  console.log(result);
  result = await funcA();
  console.log(result);
}

// async function test(){
//   return funcA();
// };
// test().then(() => {funcB()});

// console.log(test());
console.log(actionFunc());