// // console.log('hello');
// // 변수 선언 one, 선언하고 값 1을 대입

// // 1 -> '1'(string)
// let one = '1';

// // 2 -> 1
// let two = 1;

// // js 변수 one을 실행창에 기록해달라
// // console.log(one);
// console.log(one+two)
// // 값이 뭔지 모를 때가 있다
// // 콘솔에서 변수 one의 데이터 타입이 뭔지 기록해달라
// console.log(typeof (one+two));

// // 타입 연산자 = 타입 체크
// // 프로그래밍에서는 데이터 타입이 매우 엄격하다
// // 숫자 1과 문자열 '1'은 완전히 다른 판정을 한다

// // 1!=='1'은 완전히 다른 것

// // js는 문자열과 숫자가 만나면 앞뒤로 붙여버린다, 문자열로 취급한다, 다른 프로그래밍 언어에서는 에러가 난다
// // 100+vh 이렇게 문자열로 연결해줘서 유용하기도 하다

// // 문자가 연결된 것이라 typeof 연산자는 string이라고 대답해준다

// // number, string -> 굉장히 헷갈린다 => 사람이

// // 문서를 다루는 작업 -> 대부분이 문자열일 확률이 높다 === 사람말로 !숫자처럼 보이는 string일 확률이 높음!
// // !typeof 연산자! = 타입 에러를 내지 않는 확인이 될 것이다!
// ---------------------------------------------------------------------------
// let father = '아버지가';
// let room = '방에들어가신다';
// // 더한 다음 데이터 타입 체크
// console.log(father+room);
// ---------------------------------------------------------------------------
// let na = "공욱재는 미남이다.";

// // 만약 소괄호 내용이 맞으면
// if(typeof na === "string") {
//   // 소괄호에 있는 내용이 맞으면 중괄호에 있는 것 좀 실행시켜줘
//   console.log("아하하하하하하핳");
// }

// // if(): grammar, 모든 프로그래밍 언어와 동일, 만약에 !조건문! -> 조건이 부합하면 뭔가를 할 수 있음
// // 데이터 타입
// // 2진법: 0, 1 => boolean type(boolean, bool, 불린) => !값이 단 두개!
// // 1. true(참) === 1 || false(거짓) === 0
// // 이쪽 아님, 저쪽
// // 알고리즘에서 가장 중요한 조건문
// // === 조건문(condition statement)
// ---------------------------------------------------------------------------
// // 객체는 태그와 같다, 태그와 모양새가 같음
// let sohi ={
//   name: 'sohi',
//   gender: 'female'
// }
// // 타입체크
// console.log(typeof sohi);
// // 값을 검사
// if(sohi.name === 'ukjae'){
//   // true
//   console.log('미남이다');
// } else{
//   // false
//   console.log('틀렸어 임마');
// }

// // 컴퓨터에게 무언가 판단을 시킬 때 !조건이 반드시 필요하다!, !조건은 명확해야 한다(-> 명확하지 않아서 분간을 못한다)!
// // 판단의 결과물을 모두 만들어줘야 한다
// // 참과 거짓일 경우 모두를 명령해줘야 한다

// // ===(!일치 연산자, 일치하는지 보는 비교 연산자 중의 하나!): 같다는 등호 === !비교했구나!
// // =: 같다라고 표현을 하지만 오른쪽을 왼쪽에 대입시킨다, 가리킨다, 대입한다