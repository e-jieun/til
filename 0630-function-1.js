// 1. 내가 피곤하면 -> 함수로 만드는 것
// 2. 무언가 반복적을 만든다면 -> 함수로 만드는 것
// 3. 내가 무언가 암산을 하고 있다면 -> 함수로 만드는 것

function strCombine(a, b){
  return a+b;
}

function consoleLoop(count, string){
  for(let i = 0; i < count; i++){
    console.log(string);  //!이 부분에 콘솔을 안 찍어줘서 문제가 생겼었음
  }
}

// 고차함수, 추상화
function one(ipgoo, ipgootoo, count){
  // return ipgoo+' '+ipgootoo;
  let strings = strCombine(ipgoo, ipgootoo);
  consoleLoop(count, strings);
  return 'completed';
}; 

console.log(one('<div>','</div>', 5));
one('아버지가','방에 들어가신다', 5);

// *함수 규모 여부에 상관없이
// *1. 입구, 출구, 실행 구성해보기
// *2. 동작하는지 확인
// *3. 함수로 사용할 수 있겠다 => 리팩토링

// 가정: 태그 하나를 만드는 일
// 가정: 페이지 하나라면?
// => 배열의 길이값만큼 페이지 만들어진다면

// 코딩테스트를 본다고 하는 것 기본 사항 + 활용 능력을 보겠다
// '포폴로는 못 믿겠다'
// '컴퓨터 사고력이 중요'

// 1. 하던대로 -> 나를 피곤하게 만드는 일
// 2. 코딩 자체가 피로도 높음
// 3. 훈련은 몸을 8시간 일할 수 있도록 만드는 것
// 4. 코딩을 최대한 편하게 해서