console.log(/bc|c/.exec('abc'));
let pattern = new RegExp('c', 'g'); //생성자로 정규표현식을 만드는 방법
console.log(pattern);

// match():매치된 문자열을 배열로 반환/null
// replace():매치된 문자열을 지정한 문자열로 치환
// search(): 매치된 문자열의 인덱스 반환/-1
// split()
// exec(): 매치된 문자열을 하나의 배열로 반환/null, 플래그 g 적용하지 않음
// test(): 매치되면 true/false

let leftValue = ['100px', '200px','300'];
leftValue.forEach(elem => {
  let elemRegexp = new RegExp('^0-9','g');
  // console.log(elemRegexp);
  let newElem = elem.replace(elemRegexp);
  newElem = parseInt(newElem);  
  console.log(newElem);
});  //null