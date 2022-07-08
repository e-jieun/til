let pxUnit = 'px';
// console.log(leftValue[0].includes(pxUnit)); //true
// console.log(leftValue.indexOf(pxUnit)); //-1
// console.log(leftValue[1].slice(0, leftValue[].indexOf(pxUnit)));
// 없는 인덱스를 불러서 오류가 났었음
let indexof = leftValue[1].slice(0, leftValue[1].indexOf('px'));
console.log(indexof);
console.log(Number(indexof));

// 오류 여지를 사전에 정리해주는 것
// filter를 통해 'px'이라는 문자열을 포함하고 있는 원소들을 걸러내줌
leftValue.filter((value, index) => {
  // 'px'라는 문자열 값을 가진 pxUnit이라는 변수를 포함하고 있는지
  if(value.includes(pxUnit)){
    // true
    console.log('조건에 맞는 원소');  // 현재는 모두 조건에 맞는 원소로 나온다
  } else{
    // false => !true
    // 'px'이란 문자열을 포함하지 않을 경우
    console.log('조건에 맞지 않는 원소가 존재, px 포함하지 않음')
    // 맞지 않는 원소의 인덱스 하나를 대체한다, 그런데 마지막 인자로 값을 넣지 않으면 배열의 마지막이 사라짐
    // leftValue.splice(index, 1, '');
    leftValue.splice(index, 1);
    console.log(leftValue);
  }
});

// 빈 배열을 하나 선언한다
const intValue = [];
// 배열의 원소마다 반복해준다
leftValue.map(elem => {
  // 'px'이라는 문자열의 인덱스를 가져와주는 변수를 초기화한다
  let getEndIndex = elem.indexOf(pxUnit); //!.indexOf()로 없애줄 데이터의 인덱스를 알아내고
  // temp라는 변수는 각 원소의 0번 인덱스부터 'px'이란 문자열 이전까지의 문자열을 잘라 리턴해준다 => 결론적으로 숫자만 들은 문자열을 반환해주게 되는 것 
  let temp = elem.slice(0, getEndIndex);  //!원소 하나마다 잘라주는 .slice()로 temp라는 변수에 'px'이라는 문자열의 인덱스 이전까지 잘라내 정수만 담은 문자열의 가공완료된 데이터를 변수 temp로 담아줬다
  temp = parseInt(temp);
  // !temp는 가공된 정수만 담게된 문자열이므로 숫자 변환이 가능하다
  intValue.push(temp);
  // 정수만 담은 문자열인 temp를 빈 배열의 마지막 요소로 추가해준다
  // !위에서 초기화한 새로운 빈 배열에 반복적으로 정수를 담은 문자열(가공된 값)을 배열의 끝 원소로 추가해줬다
  // !결론은 intValue는 정수를 담은 배열이 된 것
})
console.log(intValue);  // 그러면 이 배열에 정수가 잘 담기게 된다

// *배열의 요소들을 더해주는 함수
function arrSum(elem1, elem2){
  // ?정수인지 판별해줌
  // console.log(Number.isInteger(intValue[0]));  //true
  if(Number.isInteger(elem1) && Number.isInteger(elem2)){
    return elem1 + elem2;
  } else{
    console.error('type error: elem isn\'t integer');
  }
}

// *다시 단위에 적용할 수 있도록 'px'단위를 문자열로 더해주는 부분
function newLeftValue(value){
  return value+pxUnit;
}

console.log(arrSum(intValue[0], intValue[1]));
let intSum = arrSum(intValue[0], intValue[1]);
console.log(newLeftValue(intSum));
