// 전역 변수이므로 어디서든 접근 가능
let a = 1;
let b = 1;
let c = 1;

// declaration
function valueTest(){
  // console.log(a);
  // if1. 
  if(typeof a === 'number'){
    console.log('변수 a는 숫자');
  } 
  // else if(typeof b === 'number'){
  //   console.log('변수 b는 숫자')
  // }
  else{
    console.log('변수 a는 숫자 아니다');
  }

  // if2.
  if(typeof b === 'number'){
    console.log('변수 b는 숫자')
  } else{
    console.log('변수 b는 숫자 아니다')
  }
  
}

// if() 제어문은 여러가지
/* if와 다른 조건식이 필요한 경우 else if() !== if()
if, else if를 모두 썼다면 둘 다 아닌 경우가 else
조건식이 까다로워질수록 -> 프로그램이 똑똑해진다 */

//  if문을 좀 더 짧게, 한번에 처리하고싶다
// function valueTestTwo(){
//   // and(그리고, 논리곱) 연산자
//   // 둘 다 true 여야만 한다
//   // => 조건식이 길수록 -> 뚜렷한 초점이 존재한다
//   if(typeof a === 'number' && typeof b === 'number'){
//     console.log('a, b 모두 number 타입입니다');
//   } else{
//     console.log('다 모르겠지만 둘 중 하나만 참이거나 둘 다 참이 아닐 수 있습니다');
//   }
// }

// ||(or 연산자): 둘 중에 하나만 맞아도 참을 반환한다 -> 좀 더 너그러운 편이다
function valueTestTwo(){
  // if(typeof a === 'number' && typeof b === 'string'){
  //   console.log('a, b 모두 number 타입입니다');
  // } else{
  //   console.log('다 모르겠지만 둘 중 하나만 참이거나 둘 다 참이 아닐 수 있습니다');
  // }

  // if문을 마치 여과기처럼 사용하기
  // if/else 중 하나가 메인 알고리즘인 경우가 많다
  if(typeof a === 'string'){
    console.log('a is string');
    // --------------------------------------
    // else일 때 if가 실행
  } else{
    if(typeof a === 'number'){
      if(a === 1){
        console.log('a is 1');
    // --------------------------------------

      } else{
        console.log('a is not 1');
      }
    // --------------------------------------
    } else{
      console.log('a is not number');
    }
  }
  console.log('test');
}
// 로그인 데이터를 받을 때, 문자열이 너무 많으면 점점점으로 대신할 때
// => 데이터를 골라낼 때, 여과기 정수기, 필터, 에러를 미연에 방지한다


// a와 c가 같은 숫자인지를 판별
if(typeof a === 'number'){
  console.log('a는 숫자');
  if(typeof a === typeof c){
    console.log('a, c의 타입이 같다');
    if(a === c){
      console.log(a);
      console.log(c);
      console.log('a, c는 같은 타입의 같은 값이다')
    } else{
      console.log(a);
      console.log(b);
      console.log('a, c는 같은 타입의 다른 값이다')
    }
  } else{
    console.log('c는 a와 타입이 다르다');
  }
} else{
  console.log('a는 숫자가 아님');
}

valueTestTwo();

// calling
// valueTest();