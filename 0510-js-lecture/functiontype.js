// function type

// function declaration
// 선언하는 순간 => 전역 스코프(global)
// 기명(이름이 있는)함수 선언방식
// !오히려 기명 함수를 많이 사용하지 않음
function typeA() {

}
// function calling
typeA();

// !함수 리터럴 => setInterval
// 익명함수(anonymous function => 권장되는 방식)에 식별을 해준 것
// 함수 리터럴(literal, 직접 새긴다)
// 함수 표현식(function expression)
// => 왜 권장? => 제작자는 알지만 외부사람은 모르는 방식 === 권장되는 방식
const typeB = function(){

}

typeB();

// 화살표 함수(arrow function)
// 함수 표현식과 같은 기능이지만, 축약형(? => 기능상의 문제 this., 개발자들의 귀찮음)이다
// 특정 작동 떄문에 -> 최신 문법

const typeC = () => {}
// ===
const typeD = function(){}
// const typeC = !() =>! {} -> 소괄호()가 함수의 역할을 해줌
// 비교 연산자는 부등호가 먼저 나와야 한다

const typeE = a => {} // 소괄호가 없는데 매개변수가 하나일 떄는 소괄호를 안써도 됨
const typeF = (a) => {} // 소괄호가 없는데 매개변수가 하나일 떄는 소괄호를 안써도 됨
// => 기성 개발자들이 많이 사용하는 방식

(function(){})();
// 즉시 시작함수
// (function(){})(인수가 있을 경우 여기 들어간다);
// 선언이고 호출이고 모르겠고, 즉시 실행하겠다, 즉시 실행함수
// => 보통은 문서 시작할 때 쓰는 경우가 많음, 라이브러리, 제이쿼리


// callback function
// : 함수의 매개변수 자리에 함수가 들어가 있는 것
// 콜백함수는 익명이 기본이다
// 매우 많이 사용하기 때문에 메서드(내장함수)들 떄문에 눈에 익혀야 한다
let test;
// test.addEventListener('type', function(){});
test.addEventListener('type', testFunction);
function testFunction(){
  // 콜백함수를 밖으로 빼내준다
  // 기명으로 함수를 만들어줬다
  // 기명으로 콜백을 쓸 떄는 호출이 아니라 작성이기 떄문에 소괄호를 쓰지 않는다는 특징이 있음
}

// react 등 자동화 프로그램에서 사용됨
<div onclick=""></div>
// === addEventListener()
