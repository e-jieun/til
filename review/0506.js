// console.log('test');

// // 기본형
// // 초기화(init, initialize) === 변수 선언과 동시에 값을 대입

// let value = 0;
// // 0이 100으로 바뀐다
// // value = 100;
// console.log(value);

// // ----------------------------

// // 첫번쨰 파라미터 함수(매개변수 자리에 실행할 함수가 자리잡은 것을 !callback function!)

// // callback function
// // callback function hell => 굉장히 헷갈리는 포인트가 될 것이다

// // interval도 변수 선언할 수 있다
// let interval = 100;

// // 내장함수, 익명함수

// const timer = setInterval(function(){
//   value += 2; //value = value+2;
//   console.log(value);
//   // 조건식에 부등호를 사용하는 편이 버그를 안나게 해준다
//   if(value > 100){
//     clearInterval(timer);
//   }
// }, interval);

// ----------------------------

// fadein

// 클릭 횟수를 핸들링하는 변수
let clickValue = true;
// 현재 상태를 나타내는 변수 isStatus를 불린값 true 초기화
let isStatus = true;
// opacity값을 0에서 100을 줘서 불투명도를 조절해준다
let opacityValue = 0;
// 주기의 간격 => 1000ms === 1s
let interval = 100;
// 타이머
let timer;

// 클릭
// if(clickValue === true){
//   if(isStatus === true){
//     timer = setInterval(function(){
//       console.log(opacityValue);
//       opacityValue += 10;
//       if(opacityValue > 100){
//         clearInterval(timer);
//       }
//     }, interval);
//   }
// }

if(clickValue === true){
  if(isStatus === true){
    opacityValue = 100;
    timer = setInterval(function(){
      console.log(opacityValue);
      opacityValue -= 10;
      if(opacityValue < 0){
        clearInterval(timer);
      }
    }, interval);
  }
}