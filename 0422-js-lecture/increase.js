const arr = ['capuccino', 'americano', 'beer', 'soju', 'xingdao'];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr.length);

// 숫자 핸들링하려고 인덱스 자리에 사칙연산을 써먹으려고 변수를 하나 만들어 줌
let indexValue = 0;
// 간격을 만든다
// setInterval();
// 규칙이 첫번쨰 자리의 함수가 들어옴
// setTimeout(function(){
//   console.log(arr[indexValue]);
//   indexValue++;
// // 인덱스 값이 
//   if(indexValue === arr.length){
//     clearTimeout();
//   }
//   // 1s === 1000
//   // delay기능
// }, 5000);

// 간격을 두고서 할래
// 타이머 만드는 거
// function이 1번째 인수
// 글라이더의 개념
let count = 0;
let timer = setInterval(function(){
  // 만약 인덱스 값이 배열 길이보다 작은 게 참이면
  if(indexValue < arr.length){
    // 콘솔에 배열의 인덱스 값(번)으로 기록해라
    console.log(arr[indexValue]);
    // 그리고 나서 인덱스 값에 1을 더한다
    indexValue++;
    // 만약 인덱스 값이 배열 낄이보다 작지 않은 것이 참이면
  } else{
    // 인덱스 값을 0으로 재할당한다
    indexValue = 0;
    // 그리고 나서 카운트 값에 1을 더한다
    count++;
  }
  // 만약 카운트 값이 3보다 큰 것이 참이면
  if(count > 3){
    // 타이머를 꺼줘
    // 이 부분이 없으면 무한 반복
    clearInterval(timer);
  }
  // 1s === 1000ms
}, 1000);

// =============================>
// 배열과 숫자의 만남은 운명의 데스티니다
// 덧셈 ++, 뺄셈 -- => 얼마나 큰지 실감할 수 있다
// 다행히 인덱스는 0.1 이런 숫자가 아니라 int(integer(정수))
// 1초에 60번 실행하면 영상

// 위와 같은 것 더 보고싶다면
// js design pattern === 코드짜는 방식
// 코딩은 숫자놀음이다

// -----------------------------------
// 첫 시간 레이아웃
// 1. 스타일링하는 방법은 제어방식으로 할 수 있다
// 2. 객체를 찾았다가 중요 === 객체에서 무언가를 찾았다
// 3. css가 왜 만들어졌는지 알게 됐다

// css 탈출
// 선택자, 식별자를 잘 만들고
// 검사할 줄 알아야하고
// 스타일 객체에 접근할 줄 아는 능력

// 4. 객체, 배열 만들기 => 작성법 -> 어렵지만 익숙해질 필요가 있다
// 5. 클릭하면 숫자가 증가하고 => 프로그래밍+디자인 영역 사이를 체험해봤다
// 5-1. 배열을 핸들링 -> 슬라이더, 화면전환, 탭 이벤트와 같은 효과들을 만들어낼 수 있음

// codepen js slider
// https://codepen.io/gawrlthi144/pen/WXqqza