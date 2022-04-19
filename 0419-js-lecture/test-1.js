function sum(a, b){
  // => 매개변수 a와 b는 값이 들어갈 공간이다
  // 함수는 상자라서 열 방법이 없다
  return a+b;
  // => 반환 = 뱉어낸다
}

// 프로그래밍 = 재탕의 미학
// @mixin, @include와 매우 닮았다
// 함수 선언부는 @mixin과 같다
// => 하나 잘 만들어 놓으면
// 함수 콜링(calling)은 @include와 같다
// => 언제든지 꺼내쓸 수 있음

// log도 함수다 = log는 객체? => 객체 안에 키 값으로 들어가 있는 함수는 !method!이다
// 일반 함수는 function이라고 부르고
// 이미 만들어진 함수 vs 내가 직접 만들 함수
console.log(sum(9, 1));
console.log(sum(3, 4));
console.log(sum(2938948923, 283984923));
