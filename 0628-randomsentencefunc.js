const subject = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란", "피존투", "또가스"];
const directObject = ["사과나무", "텀블러", "단무지", "커피", "연필", "에디터"];
const verb = ["먹었다", "마셨다", "놀았다", "졸았다", "잡았다", "좋아한다", "싫어한다", "애정한다", "놓쳤다", "흘렸다"];


// *룰만 지켜주면 조립이 가능하다
// *하나는 뒤에 붙여주는 것
// ?koreaString은 매개변수
// ?charAt(); => 인덱스를 반환해준다(캐릭터가 있는 곳의 인덱스)
function isEndWithConsonent(koreaString) {
  // ?https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // ?charCodeAt(index); => 주어진 인덱스에 대해 utf-16의 코드를 나타내는 0~65535를 반환해주는 메서드이다
  const finalCharCode = koreaString.charCodeAt(koreaString.length - 1);
  // ?=> finalCharCode라는 변수는 매개변수로 들어온 문자열의 마지막 요소의 인덱스의 utf-16코드를 반환해준다
  const finalConsonantCode = (finalCharCode - 44032) % 28;
  // ?=> 반환된 문자열 마지막 인덱스의 utf-16코드에서 -44032를 하고, 28로 나눈 나머지가
  return finalConsonantCode !== 0;  //?boolean값으로 return
  // ?=> 0과 같지 않다면 true를 리턴
}
console.log(isEndWithConsonent(subject[4]));  //true

function appendEulReul (koreaString) {
  // ?을, 를을 할당해준다
  if(isEndWithConsonent(koreaString) === true) {
    // ?isEndWidthConsonent가 true가 참이라면
    return koreaString + "을";
    // ?'을' => 매개변수로 들어온 문자열에 + '을'을 붙여 문자열로 반환함
    // !문자열 마지막 인덱스가 받침이 있는 경우다 / isEndWidthConsonent === true로 반환되는 경우는
  } else {
    return koreaString + "를";
    // ?'를' => 매개변수로 들어온 문자열에 + '를'을 붙여 문자열로 반환한다
    // !문자열 마지막 인덱스가 받침이 없는 경우다 / isEndWidthConsonent === false로 반환되는 경우 
  }
}

function appendEga (koreaString) {
  // ?이, 가를 할당해준다
  if(isEndWithConsonent(koreaString) === true) {
    // ?isEndWidthConsonent가 true가 참이라면
    return koreaString + "이";
    // ?'이' => 매개변수로 들어온 문자열에 + '이'를 붙여 문자열로 반환함
    // !문자열 마지막 인덱스가 받침이 있는 경우다 / isEndWidthConsonent === true로 반환되는 경우는
  } else {
    return koreaString + "가";
    // ?'가' => 매개변수로 들어온 문자열에 + '가'를 붙여 문자열로 반환함
    // !문자열 마지막 인덱스가 받침이 없는 경우다 / isEndWidthConsonent === false로 반환되는 경우는
  }
}

// *핵심 => 문서를 만들어 낼 수도 있다 -> 큰 핵심
// todo: 1. html이 무엇입니까?
// todo: 엘리먼트 노드, 텍스트 노드, 어트리뷰트 노드
// todo: 2. 만들어 본다 => 브라우저와의 관계를 파악한다
// todo: 만들 때의 태그를 만들면서 탐색, 규칙만 알면 검색해서 쓸 수 있다
// todo: 3. 문서를 기계와 부착
// todo: 퍼블리싱의 형태
// todo: 4. 그 다음의 단계? -> 상상하는 것은 이것 다음의 역할을 한다
// todo: 한계가 명확하다
// todo: 5. html에서 값을 getting해서 가공할 수 있는가

// !기계를 가지고 문서를 만든다

// ?주어, 목적어, 명사가 매개변수로 들어가는 문장을 만들어주는 함수
function makeSentence(subject, directObject, verb) {
  // ?랜덤값을 넣어주는 빈 배열
  let randomValueArray = [];
  // ?arguments(?)의 길이만큼 반복해서
  // ?https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments
  // !arguments: 매개변수로 들어오는 => 함수를 콜링했을 때 전달되는 매개변수에 해당하는 배열 객체 => 매개변수를 배열 형태의 객체를 의미하는 것
  // !여기서 arguments는 subject, directObject, verb로 길이는 3이고 인덱스는 0부터 2까지 존재하는 배열 형태의 객체를 의미한다
  for (let i = 0; i < arguments.length; i++) {
    // ?랜덤의 정수를 가져와주는 변수
    // ?Math.floor(); => 무조건 정수로 반올림
    // ?Math.radom(); => 숫자를 랜덤으로 리턴
    // !0부터 arguments[index]까지의 숫자 중에 랜덤의 수를 받아서 반올림해서 정수로 만들어 준 값이 === 변수 getRandomInt
    let getRandomInt = Math.floor(Math.random() * (arguments[i].length - 0));
    // ?빈 배열의 마지막 요소로 변수 getRandomInt에서 받은 정수를 추가해준다
    randomValueArray.push(getRandomInt);
  }
  // ?문장을 만들어주는 함수는 '주어가 든 배열[getRandomInt로 받아 빈 배열에 넣어준 0번 인덱스에 든 정수]+'이/가''+'목적어가 든 배열[getRandomInt로 받아 빈 배열에 넣어준 1번 인덱스에 든 정수]+'을/를''+'동사가 든 배열[getRandomInt로 받아 빈 배열에 넣어준 2번 인덱스에 든 정수]'가 합쳐져서 문장을 리턴하는 함수다
  return `${appendEga(subject[randomValueArray[0]])} ${appendEulReul(directObject[randomValueArray[1]])} ${verb[randomValueArray[2]]}`;
}

// ?맨 위의 배열이 문장을 만들어주는 함수의 매개변수로 들어간다
console.log(makeSentence(subject, directObject, verb));