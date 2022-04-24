// 불러올 배열을 선언해준다
const arr = ['bread', 'coffee', 'tteokbokki', 'chicken', 'shake', 'hamburger'];

// 콘솔에 배열을 기록해준다
// console.log(arr);

// 숫자로 함수를 조건문을 핸들링 하기 위해 인덱스 값을 주는 변수를 하나 선언한다
// 인덱스는 0번부터 시작이므로 0으로 변수값을 할당한다
let indexValue = 0;
// // 간격을 만들어줌
// // https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// // https://ko.javascript.info/settimeout-setinterval
// // setInterval();
// // 규칙은 첫번째 자리에 함수가 들어온다
// // 두번째 자리에 시간이 ms 단위로 들어온다 
// setTimeout(function(){
//   // 콘솔에 배열의 변수 인덱스 값(번)으로 기록
//   console.log(arr[indexValue]);
//   // 기록하고 나서 인덱스 값에 1을 더해준다
//   indexValue++;
//   // 만약 변수 인덱스 값이 배열 길이와 같은 것이 참이라면
//   if(indexValue < arr.length){
//     // setTimeout을 초기화 시켜주는 메서드
//     clearTimeout();
//   }
//   // 1s === 1000ms
//   // 이 시간 간격으로 실행해준다
//   clearTimeout();
// }, 1000);
// 출력을 반복해줄 변수로 count를 선언해주고 값을 0으로 할당
let count = 0;
// 타이머 변수의 값으로 일정 시간 간격을 두게 해주는 함수 설정해준다

// 타이머를 만들어주는 것
// 슬라이더의 개념
let timer = setInterval(function(){
  // !인덱스 값이 배열 길이보다 작은 것이 참이면
  if(indexValue < arr.length){
    // 콘솔에 배열의 인덱스 값(번)을 기록한다
    console.log(arr[indexValue]);
    // 그리고 나서 인덱스 값을 1 더해준다
    indexValue++;
    // 카운트 값이 인덱스 값보다 작지 않은 것이 참이라면
    // 배열을 한번 모두 출력하고 난 뒤
  }else{
    // 인덱스 값을 0으로 재할당
    indexValue = 0;
    // 카운트 값은 1을 더해준다
    count++;
  }
  // 만약에 카운트 값이 3보다 큰 게 참이라면
  if(count>=3){
    // setTimeout을 초기화 시켜준다
    // 멈춰준다
    clearTimeout(timer);
  }
  // 배열 길이와 인덱스 값이 같은 것이 참이면
  if(arr.length === indexValue){
    // 콘솔에 문자열 '-----'을 기록해줘
    console.log('-----');
  }
  // 1s === 1000ms
}, 1000);
// => 배열과 숫자의 만남은 운명의 데스티니다
// ++, -- 1을 더하고 빼는 것이 얼마나 큰지 실감할 수 있다
// 다행인 건 인덱스는 소수가 아닌 정수(int(eger))라는 것