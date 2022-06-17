// todo: Math.random()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// todo: 1-6까지 랜덤으로 숫자가 나오는 애플리케이션
// todo: Math.random() -> 리턴이 소수
// 이상적인 코드는 함수 -> 함수 호출

// todo: math.random()의 사용법을 우선 알아본다
// !Math.random() * number: 0-number 까지의 숫자 중 랜덤으로 나옴
// !(Math.random() * (max-min))+min: min-max의 숫자가 랜덤으로 나옴
// console.log(Math.round(Math.random()*6));
const randomNum = (min = 0, max) => {
  return Math.round(Math.random()*(max-min)+min);
}

// todo: 두 수 1, 6 사이의 랜덤 숫자 
// console.log(randomNum(1, 6));
export default randomNum;

// todo: 작성하고나서 문서에 작성, 어떤 수가 나오면 그 수대로 엘리먼트를 만든다
// todo: 문서와 연결해 DOM API를 핸들링 => div를 Math.random으로 나오는 수대로 요소를 만들어 준다