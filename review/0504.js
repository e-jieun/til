// // 함수 선언부 함수명(매개변수1, 매개변수2){
// function b(first, second){
//   // 리턴 값;}
//   // 실행이 되기 위해 테스트되고 있는지를 테스트하기 위한 콘솔
//   console.log(first+second);  // Not a Number
//   // 리턴값(결과값)을 준 부분
//   return first+second; // 리턴값이 없은 채 함수를 호출하면 undefined가 찍힌다, 되돌려줄 값이 없기 때문, 실행은 잘 되고 있는 것이다
// }
// b(1, 2);
// console.log(b(1, 2)); //  return이 없을 경우, undefined, 함수가 실행되는 결과 값을 찍어줄 부분

// // 함수 선언부 
// function b(first, second){
//   // 만약 매개변수 first의 타입이 number인 것이 참이면
//   if(typeof first === 'number'){
//     // 리턴값으로 첫번째 인자인 first에서 두번째 인자인 second를 빼줘
//     return first-second;
//   // typeof first !== 'number'
//   } else{
//     // 콘솔에 다음 문자열을 찍어줘
//     console.log('첫번째 매개변수 변수 타입이 숫자가 아님!');
//   }
// }
// // 함수 호출
// b(1, 2);  //error
// console.log(b(1, 2)); //-1
// console.log(b('hello', 2)); //첫번째 매개변수 변수 타입이 숫자가 아님!, undefined

// function b(first, second){
//   // 테스트하는 부분
//   // console.log(first+second);
//   // 결과값을 돌려주는 부분, 뱉어내주는 부분
//   return first+second;
// }
// b(1, 2); //아무것도 찍히진 않지만 실행되고 있다, 에러가 안 뜬다, 테스트하는 부분을 출력해준 것 === 콘솗부분
// console.log(b(1, 2)); //함수가 실행되는 결과값을 찍어주는 부분 => 결과값을 주는 부분

// 함수 선언부
function b(first, second){
  if(typeof first === 'number'){
    return first-second;
  } else{
    console.log('첫번째 매개변수의 변수 타입이 숫자가 아님');
  }
}

// 함수 호출부
b('babo', 1); //error 혹은 else에 담긴 테스트용 콘솔이 찍힌다
console.log(b(1, 2)); //-1, 리턴값이 실행된다