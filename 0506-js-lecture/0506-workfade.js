console.log('test');

//  기본형
// 변수 선언과 동시에 값을 대입 === 초기화(init, initialize)
let value = 0;
// 0이 100으로 바뀐다
// value = 100;
// 값을 새로 할당했다(assignment)
// 대입 연산자(=) 를 활용해서

console.log(value);

// ---------------------------------------------------------------
// 첫번째 파라미터 함수(매개변수 자리에 실행할 함수가 자리잡은 것을 !callback function!)
// callback function
// callback function hell => 굉장히 헷갈리는 포인트가 될 것

// interval도 변수로 선언할 수 있다
let interval = 100;
// 내장함수, 익명함수
// 변수 timer는 함수 setInterval를 가리킨다
const timer = setInterval(function(){ // 함수를 변수에 담는 패턴 === 함수 리터럴, 함수 표현식 === setInterval을 끄기 위해 식별하기 위해 변수 timer에 대입함
  // 1초당 value값이 1씩 증가되고, 증가될 때마다 콘솔이 찍히면 좋겠다
  console.log(value);
  // value++;  // 1에 국한해 증가 연산자(++) 가능, value += 1; === value = value+1;

  // 2씩 증가
  value += 2;
  // === value = value+2;

  // 부등호를 사용하는 편이 버그를 안나게 해준다 
  if(value > 100){
    clearInterval(timer);
  }
}, interval);