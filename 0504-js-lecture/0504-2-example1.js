// for문을 기계로 만들어보자, 캡슐화 모듈화
// for(let i = 1; i <= 56; i++){
//   console.log('hello');
// }

// 함수 선언
// function helloMachine(){
  //   for(let i = 1; i <= 20; i++){
    //     console.log('hello');
    //   }  
    // }
    
    
    // 캡슐화, 모듈화 === 함수로 묶었다, 함수로 만들었다
    // 매개변수로 꺼냈다 -> 매개변수를 활용했다

// 매개변수 -> 인자로 값을 
// 첫번째 인자, 첫번째 파라미터, 0번 파라미터
// !재료를 3개를 넣을 수 있는 공장을 만든 행위!
// Scss => @mixin

// // 기명함수(이름이 있다): 일반적인 함수 선언 방식
// function textMachine(startValue, endValue, textValue){
//   // 함수 안에 들어오면 무조건 실행되어야 할 부분
//   // => 리턴을 안 써도 실행이 된다
//   for(let i = startValue; i <= endValue; i++){
//     console.log(textValue);
//     // return이 없는데 왜 값이 나왔지?
//     // 콘솔을 실행한 것일 뿐 값이 도출된 것은 아니다
//   }  
//   // scope안이 다 실행되고 나서
//   // 다 실행되고 나서 return이 뭔지 조회
//   return 'hi';
// }

// 함수 호출
// 인수를 써줘야 값이 들어감
// textMachine(1, 20, 'hello');
// textMachine(3, 10, 'bye');

// 함수 안에 함수가 있는 형식
// console.log(textMachine(2, 2, 'test')); //  undefined

/* 함수는 리턴값이 없는 경우
1. 에러가 나는 게 아니라
2. undefined 값을 자동으로 붙여준다 -> 값 중에 하나 */ 

// 기명함수(이름이 있다): 일반적인 함수 선언 방식
// function textMachine(startValue, endValue, textValue){
//   let result = textValue;
//   for(let i = startValue; i <= endValue; i++){

//   }  
//   return result;
// }

// console.log(textMachine(1, 2, 'console'));
// textMachine(1, 2, 'console');

function a(){
  // 테스트용 실행용  
  // 알고리즘을 위해 자국을 남기는 것일 뿐
  // 알고리즘용으로 콘솔을 찍어준 부분
  // === 실행부분
  console.log('test');
  // 결과값이 나오는 용
  // === 결과부분
  // return '메롱'; //  주석처리하면 undefined === 실행을 했지만 값은 없다
}
// a();  // 값이 안 나올 뿐 잘 실행되는 것
// 결과물이 문자열이라 안 찍히므로
console.log(a());