function b (first, second){
  // 실행부분 console.log();는 테스트용
  // console.log(first+second);
  return first+second;
}
b(1, 2);
// 결과값을 주는 부분
console.log(b(1, 2)); //  함수가 실행되는 결과 값을 찍어줘

function b1 (first, second){
  // first 매개변수는 타입이 number여야만해
  if(typeof first === 'number'){
    // !type check!
    // 숫자여야만 리턴이 되도록
    return first-second;
  } else{
    console.log('첫번째 매개변수 변수 타입이 숫자가 아님!');
    // console.error('첫번째 매개변수 변수 타입이 숫자가 아님');  //  console.error();
  }
}

b1('babo', 1);  //  error 혹은 실행 테스트용
console.log(b1('babo', 1)); // 리턴값이 실행