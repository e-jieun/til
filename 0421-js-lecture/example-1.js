/* 선언한다  declaration → 선언을 하지 않는 방법도 있다, 선언도 하나의 선택지일 뿐
중괄호 영역(function scope) {이 안의 부분을 local scope이라고 한다}

전역 스코프(영역): {} 밖에 있으면 전역 스코프 === global scope
지역(블럭) 스코프(영역): {}안에 있으면 블럭 스코프 === block scope, local scope


함수의 기능 중에 하나다 === 인자, 인수
function name (인자){
}
parameter(=== 인자)

name(인수);
argument(=== 인수)

템플릿 문자열(template string) === 문자열 보간법
es6(=== ecma script 6)
 */

// let nuri = '이누리';
// let text = '을 좋아합니다';
// // let chobob = '초밥';
// // let guaja = '과자';
// let foodObject = {  //객체가 생겨난 이유
//   chobob: '초밥',
//   guaja: '과자',
//   coffee: '커피'
// }
// 자료구조
// *변수에 작명할 떄 !data type! 표시해두면 에둘러 찾을 필요가 없음
// => nuri라는 변수는 foodObject란 객체의 무언가는 가져다 쓰겠지 => 예상이 가능해진다
// !값보단 타입이 중요해진다! 
// === 이것이 추상화 작업이다

// => 자바스크립트에서 DOM(HTML,CSS)가 모두 객체이기 때문이다
// DOM(Document Object Model)

/* 연습 포인트
1. 객체를 만들어서 써버릇 해보는 것
2. 객체의 키값을 이것저것 꺼내보는 연습이 필요
3.배열작성해보기
4. 배열 원소 넣어보기

*객체를 만들어서 객체를 사용해본다
*단어 잘 챙기기
 */

// 구조화 할당(constructuring assignment) => 객체를 미리 만들어놓고 사용하는 방식, 변수를 만들어서 그때그때 꺼내서 사용

// 알고리즘을 편하게 쓰기 위해 묶는다
// 알고리즘, 프로그래밍 하기 따라서 객체, 배열, 변수로 얼마든지 바꿔쓸 수 있다


// 변수 stringSum이라는 녀석은 변수 nuri라는 변수와 text라는 변수를 앞뒤로 합쳤다
// === 이 변수를 stringSum에 대입했음

// 문자열 보간법 === template string

// 문자열을 다루는 방법 중에 "", '' (혼용하면 에러가 남)=> 전통적인 방식, 일반적인 방식 === 문자열만 다루겠다
// let stringSum = nuri+' '+chobob+text;

// `(backtick)이 도입되면서 => ${변수} 덧셈같은 기호를 쓰지 않아도 변수를 넣을 수 있음!
// => 문자열 사이에다가 변수를 끼워넣었구나
// `이 가진 semantic sign => 변수를 넣어놨다는 의미의 사인
// let stringSum = `${nuri}씨는 ${food.coffee}${text}`;

// console.log(typeof nuri);
// console.log(typeof text);

// console.log(stringSum);

// log에 food의 키와 값을 표시해줌
// console.log(food);
// ----------------------------------------------------------------------------

// 배열에는 원소(요소===element), length값 6개인 데이터를 변수 pokemon에 대입했다
let pokemon = ['이상해씨', '이상해풀', '이상해꽃', '파이리', '리자드', '리자몽'];

console.log(pokemon);
// 배열의 키값 중 길이값을 가져오는 length라는 프로퍼티를 접근했다 === getter의 성격
console.log(pokemon.length);
// => 메뉴가 수백개일 때 length를 활용한다

console.log(pokemon[3]);
// !인덱스 값은 0부터 시작한다는 것을 잊지 말기
console.log(pokemon[pokemon.length-1]);
// 마지막 값 === 길이값의 -1번은 마지막 원소다
// !프로그래밍 테크닉 중의 하나

// 배열에서의 순서값 [index] 자리에는 
// !1. 숫자만 들어가지 않는다
// 2. 숫자로 가져올 수 있는 무언가도 된다
// 3. 배열 순서값 자리에서 숫자로 연산도 가능하다

let three = 3;
console.log(pokemon[three]);

// algorithm
// +2하면 진화한 버전의 포켓몬
let max = `${pokemon[0]} 포켓몬은 최종 진화는 ${pokemon[0+2]}`;

// console.log(max);
