// function type
// 함수는 선언하는 순간 함수는 전역 스코프가 되고, 최상위가 된다

// 1. 기명함수: 이름이 있는 함수 선언
  function typeA() {
    console.log('i was car');
  }
  
  // 2. 함수 리터럴(literal, 직접 새긴다): 익명함수(anonymous function)에 식별을 해주는 방식
  // 함수 표현식(function expression)
  const typeB = function(){
    typeA();
  }
  typeB();

  // 3. 화살표 함수(arrow function): 함수 표현식과 같은 기능히지만 축약형(으로 사용하는 이유는 this.(와 같은 특정 작동 떄문에 최신 문법), 개발자들이 귀찮아서 많이 사용)
  const typeC = () => {}
  // ()가 함수의 역할을 해줌 => 비교 연산자와 헷갈리지 말 것
  // === const typeC = function(){}

  // 4. 매개변수가 하나일 때 소괄호를 생략해서 함수를 사용하는 방식 => 기성 개발자들이 많이 사용하는 방식 
  const typeD = a => {} //소괄호가 없는 함수, 매개변수가 하나일 떄 축약해서 사용하는 방식
  // === const typeD = (a) => {}  //소괄호가 없는데 매개변수가 하나일 떄는 소괄호를 사용하지 않아도 됨

  // 5. 즉시 시작함수: 선언, 호출 생략하고 즉시 실행하겠다(=== 즉시 실행함수)
  (function(){})(); //(function(){})(인수가 있을 경우 이곳에 넣어준다);
  // 문서를 시작할 떄 사용하는 경우가 많다, 라이브러리, 제이쿼리 등에서 많이 사용

  // 6. callback function: 함수의 매개변수 자리에 들어가 있는 함수를 이야기하는 것, 익명으로 사용하는 것이 기본이지만
  // 매우 많이 사용하기 때문에 메서드(내장함수)들 때문에 눈에 익혀야 한다

  // let test;
  // test.addEventListener('type', function(){});
  // 보통은 위와 같이 이렇게 사용했었다
  let test;
  test.addEventListener('type', testFunction);  // 기명함수의 이름을 작성해준다

  // => 기명으로 콜백을 사용할 때는 호출이 아니라 작성이기 떄문에 소괄호를 쓰지 않는다는 특징이 있다
  
  function testFunction(){
    
  }
  // 콜백함수를 밖으로 빼내줌, 기명함수처럼 함수의 이름을 만들어줬다

  // 아까 코드를 봤을 때
  <div onclick=""></>
  // 이런 형태가 있었는데 이건
  div.addEventListener('click', function(){});  // 과 같은 역할이다
// react 등 자동화 프로그램에서 사용되는 방법이다, 아직은 .addEventListener();로 사용이 가능하다
