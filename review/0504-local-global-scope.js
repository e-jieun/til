let a = 1;
// function b(){}; //undefined, 함수 b는 목적이 콘솔 찍고 종료하는 기계
// return값이 없는 상태 => undefined가 리턴
// console.log(a); //1
// console.log(b()); //undefined

function b(){
  console.log(a); //1
  // let c = 'e-jieun'; //return되지 않음, let은 영역 구분이 확실하므로
  var c = 'e-jieun';
  return c;
}; 

// console.log(c); //c is not defined
console.log(b()); //c is not defined
//=== c는 지역변수로 선언됐기 떄문에

b();  //result는 지역변수로 정의되지 않아 호출되지 않지만, 에러가 안 뜨므로 호출만 잘 실행되고 있는 것