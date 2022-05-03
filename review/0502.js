// console.log('test');

// 변수를 선언만 해줌, 값은 무엇도 !가리키지 않은 상태!
let one;
// 대입 연산자(=): 이 둘을 이어 붙이는 것이 대입 연산자, 값을 가리킨다
one = 1;
// 식별을 위해 값과 변수를 !대입!하는 과정을 거친다

// 변수 선언과 동시에 값을 가리킴 === 초기화(init)
let test = 1;
// => 데이터 1이라는 값이 할당이 되면 RAM이란 메모리에 일단 담긴다, 꺼내오려면 !식별할 방법!이 필요하다 === 변수의 큰 의미

// 활용도가 없을 뿐 값은 존재, 활용이 아직 안된 상태
1;
// => 그러나 변수를 선언하고 값으로 할당하지 않으면 데이터 숫자 타입 1이란 저 값을 쓸 방법이 없다

console.log(one);
// const two;
// console.log(two); // SyntaxError: Missing initializer in const declaration === 작성법 에러 상수는 선언과 동시에 값이 초기화가 되어야 하는데 초기화 선언과 동시에 할당하는 초기화가 이뤄지지 않아 값을 못 찾음
// 에러가 난다 === 해결만 해주면 무결해진다
// 변수는 var, let, const 세 가지가 있다 === 값을 가리키게 하는 방법
// var: 너무 유연, js가 욕먹는 1등 공신 -> 오류가 안난다, hoisting 문제도 있다
// let: 중괄호(scope) 안에서만 효력을 발생하는 var보다 명확한 구석이 있음, 값을 다루고자 하는 변수가 있다면 사용할 것
// const: 가장 많이 권장 => 사용빈도 98%, !상수!를 가장 많이 쓴ㄴ다, 변하지 않게 붙잡아가면서 작업하겠다란 암묵적 관습
// DOM API는 바꿀 일이 없기 때문에 get할 때는 무조건 const를 사용한다
// *에러가 나는 것이 목적, 어설프게 맞아 떨어지면 문제가 된다 === 에러에 익숙해지자

// 상수 선언(const) => 선언만 하면 안됨, 값도 같이 할당을 해줘야 한다 === 변수의 선언과 동시에 할당(init)
const two = 1;
console.log(two);

// string 1 === number 1이 같다고 하는 js의 가장 큰 버그
// 비교 연산자
// ==: !동등! 연산자 => 옛날에 쓰던 방식, 문자 숫자 구분을 못함, 완전 비권장됨, 에러가 나지 않음
console.log(1=='1');  //  true
// ===: !일치! 연산자 => 데이터 타입까지 모두 체크를 한다
console.log(1==='1'); //  false

let a = 1;
let b = '2아진';
console.log(a===b); //  false
console.log(typeof a === typeof b); //  false

// !형변환!: 데이터 타입을 바꾸는 행위
// 많이 사용하는 이유 === 사용자가 입력하는 데이터가 숫자일리가 없다
// 사용자 입력 행위(예시 로그인)는 거의 대부분이 string으로 input행위가 일어남

console.log(typeof b);  //  string

// 대표적인 형변환 특징
// js가 지원하는 !형변환 메서드!
// 1. 대문자가 첫글자인 pascal case로 이뤄짐
let change = Number(b); //  mdn을 보면 다른 메서드들과는 다르게 앞부분의 부연 설명이 없다 === 원시 래퍼객체
console.log(change);  // NaN(Not a Number)
console.log(typeof b);  //  string
// => 문자열을 숫자로 바꾸는 경우가 굉장히 많음 
// 키보드는 문서 자체가 문자로 이뤄진 데이터다보니 생기는 현상
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number

// null이라는 값은 존재는 하지만 비어있는 값, 프로그래밍에만 있는 개념 !빈 공간!
// 아직 값이 정해지지 않은 부분 -> console.dir();에서 속성 값이 "" 비어있는 부분들
let chae = null;
console.log(typeof chae); //  object
// js의 버그 중 하나
// null이라는 값은 number, string, object 동등한 레벨 데이터 타입인데 타입 체크를 하면 object를 뱉어내는 이상한 현상 

// 비어있는 값과 비어있는 문자열
// null vs. ""(=== 문자열 데이터 타입 선언이 끝난 상태)

let arr = ['피카츄', '라이츄', '파이리', '꼬부기'];
console.log(typeof arr);  //  object
// !버그 아님! === 배열은 사실 객체
// 객체에서 순서만 필요할 때 쓰려고 나눠놓음
// array라는 결과값을 받고 싶으면
console.log(Array.isArray(arr));  //  true
// true와 같은 bool타입으로 가져와짐
// ?Array란 객체를 .isArray라는 메서드로 arr를 객체로 불러와줄 수 있는 방법
// => 배열의 원래 본체 === 객체

// 그래서 타입체크를 다르게 해놓은 것이 있음
// === .isArray(); method: is로 시작하는 메서드는 암묵적으로 bool타입으로 결과값을 return하게 되어있음
// 작성하는 함수(기명 함수)에서도 bool로 리턴값을 받고싶으면 is 사용하는 경우가 많음

/* data type
number
string
null
undefined
object(<-array)
boolean */
// typeof연산자를 사용하면 타입구분을 계속 할 수 있음

let text = '나는 시간이 많이 필요하다';
console.log(text.length); // 14
console.log(Array.isArray(text)); // false
// 문자열도 배열
// string은 순서가 있다 === 문자 형태의 배열 === 배열접근이 가능
// => 문자(char): 말 그대로 문자 한 글자
// HTML문서를 보면 charset = "UTF-8"이라고 되어있는데 한글로 문자를 인코딩해달라는 것이다
// charset === 문자를 인코딩해주는 방식
console.log(text[3], text[4], text[text.length-4], text[text.length-3]);
// 타이핑하듯이 글씨가 하나씩 나타나는 인터랙션이 가능하다

// 결론 => 1. 버그가 많은 언어 2. 배열이 객체