const arrExample = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란" , "피존투", "또가스", "우린", "서로", "모습은", "달라도"];

// 배열 메서드
// todo: .push(...items); -> 맨 끝에 요소 추가
arrExample.push("우리는");
console.log(arrExample);
// [
//   '피카츄', '라이츄',
//   '파이리', '꼬부기',
//   '버터풀', '야도란',
//   '피존투', '또가스',
//   '우린',   '서로',
//   '모습은', '달라도',
//   '우리는'
// ]

// todo: .pop(); -> 맨 끝 요소 추출
console.log(arrExample.pop());  //우리는

// todo: .shift(); -> 첫 요소 추출
console.log(arrExample.shift());  //피카츄

// todo: .unshift(...items); -> 맨 앞에 요소 추가
arrExample.unshift('안녕');
console.log(arrExample);
// [
//   '안녕',   '라이츄',
//   '파이리', '꼬부기',
//   '버터풀', '야도란',
//   '피존투', '또가스',
//   '우린',   '서로',
//   '모습은', '달라도'
// ]

// todo: .splice(pos, deleteCount, ...items);
// .splice(몇번부터, 몇개의 요소를 지우고, 'items'를 추가하기)
// *array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
arrExample.splice(0, 1, '추억의', '피카츄');
console.log(arrExample);
// [
//   '추억의', '라이츄',
//   '파이리', '꼬부기',
//   '버터풀', '야도란',
//   '피존투', '또가스',
//   '우린',   '서로',
//   '모습은', '달라도'
// ]

// todo: .slice(start, end);
// *arr.slice([begin[, end]]); // end인 인덱스는 미포함, 음수도 사용이 된다 
// *slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함, end 앞까지의 요소 복사해 새로운 배열로 만듬)에 대한 얕은 복사본을 새로운 배열 객체로 반환, 원본 배열은 바뀌지 않습니다
// arrExample.slice(0, 2);
console.log(arrExample.slice(0, 2));  //[ '추억의', '피카츄' ]

// todo: .concat(...items);
// 배열의 모든 요소를 복사하고 요소를 추가해 새로운 배열을 만든 후 반환, items가 배열이면 이 배열의 인수를 기존 배열에 더해줌
console.log(arrExample.concat('우리는', '모두', '친구'));
// [
//   '추억의', '피카츄', '라이츄',
//   '파이리', '꼬부기', '버터풀',
//   '야도란', '피존투', '또가스',
//   '우린',   '서로',   '모습은',
//   '달라도', '우리는', '모두',
//   '친구'
// ]

// todo: .indexOf/lastIndexOf(item, pos);
// *arr.indexOf(searchElement[, fromIndex]);
// *pos부터 원하는 item을 찾음, 찾으면 해당 인덱스를 아니면 -1을 반환함
console.log(arrExample.indexOf('피카츄'));  //1
console.log(arrExample.indexOf('뮤츠'));  //-1 = 해당 인덱스 아님

// todo: .findIndex(callback);
// !주어진 판별 함수를 !만족하는 배열의 첫번째 요소!에 대한 !인덱스!를 반환, 만족하는 요소가 없으면 -1을 반환

// *arr.findIndex(callback(element[, index[, array]])[, thisArg])
console.log('findIndex()를 사용했다')
console.log(arrExample.findIndex(element => element === '피카츄')); //1

// todo: forEach();
// forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다
// *arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// console.log(arrExample.forEach(print));
// function print(pokemon){
//   return console.log(pokemon);
// }
console.log(arrExample.forEach(pokemon => console.log(pokemon)));

// todo: .from();
// *Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다
console.log('from()을 사용해봤다');
console.log(Array.from(arrExample));

// todo: .isArray(배열인지 판별할 인수);
// *Array.isArray() 메서드는 인자가 배열인지 판별해줌
// *return boolean
console.log(Array.isArray(arrExample)); //true

// todo: .every(callback function) <-> .some()
// *every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트, return boolean
const ages = [10,20,30,40,50];
function checkAge(age){
  return age > 10;
}
console.log(ages.every(checkAge));  //false
console.log('every()를 사용해봤다');
console.log(ages.every(element => typeof element !== 'number'));  //?false

// todo: .some(callback function) => || <-> .every() => &&
// *some() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트, return boolean
console.log(ages.some(element => element > 10)); //true


// todo: .at(number(index))
// *at() 메서드는 정수 값을 받아, 배열에서 해당 값에 해당하는 인덱스의 요소를 반환, 양수와 음수 모두 지정할 수 있고, 음수 값의 경우 배열의 뒤에서부터 인덱스를 셉니다
// *at() 메서드의 존재가 대괄호 표기법을 부정하는 것은 아닙니다
// *예를 들어 array[0]은 문제 없이 배열의 첫 요소를 반환, 그러나 맨 마지막 요소를 가져오고 싶을 때 length 속성을 사용해 array[array.length - 1]을 하는 대신, 짧게 array.at(-1)을 사용할 수 있음
console.log(arrExample.at(-1)); //달라도
// console.log(arrExample);

// todo: .filter(callback function)
// * 주어진 함수의 테스트를 통과하는 모든 요소들을 모아 새로운 베열로 반환해준다
console.log(ages.filter(checkAge)); //[ 20, 30, 40, 50 ]

// todo: .includes()
// *arr.includes(valueToFind[, fromIndex])
// *배열이 특정 요소(인수 자리의)를 포함하고 있는지 판별함
console.log(arrExample.includes('피카츄', 2));  //false
console.log(arrExample.includes('라이츄', 2));  //true

// .join(배열) <-> .split(요소)
// todo: .split(요소(문자열))
// 문자열을 나눠 배열로 담아준다
console.log(arrExample.at(-1).split('')); //[ '달', '라', '도' ]

// todo: .join(요소(문자열))
// .join의 인수에 들어갈 스트링으로 배열을 문자열로 모두 합쳐준다
console.log(arrExample.slice(-4,-1).join(' ')); //우린 서로 모습은

// todo: .map(callback function)
// *배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다
function sum(num){
  return num+num*2;
}
console.log(ages.map(sum)); //[ 30, 60, 90, 120, 150 ]


// !.reduce(callbackfunction, initialValue);
// ?리듀서 함수? => https://miiingo.tistory.com/365
// ?누산기? 누적계산기, 배열의 각 요소에 대해 함수를 실행하고 누적된 값을 출력할 때 용이하다, 모든 배열의 합을 구하는 경우가 있다
// https://www.w3schools.com/jsref/jsref_reduce.asp
function addAll(total, num){
  return total += num;
}
function minusAll(total,num){
  return total -= num;
}
// !배열의 모든 수를 누적해서 계산할 수 있게 해주는구나
console.log(ages.reduce(addAll, 0));  //150
console.log(ages.reduce(minusAll,200)); //50

// todo: .sort()
// *배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다 정렬은 ?stable sort?가 아닐 수 있습니다, 기본 정렬 순서는 문자열 유니코드 코드 포인트를 따릅니다
// ?stable sort: 중복된 값을 순서대로 정렬하는 안정 정렬
// https://velog.io/@cookncoding/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-Stable-Sort-Inplace 
console.log(arrExample.sort()); //가나다순 정렬


// todo: .toString()
// *지정된 배열 및 그 요소를 나타내는 문자열을 반환한다
console.log(arrExample.toString()); //꼬부기,달라도,또가스,라이츄,모습은,버터풀,서로,야도란,우린,추억의,파이리,피존투,피카츄


// todo: .values()
// ?iterator: 반복자, 객체 지향적 프로그래밍에서 배열이나 그와 유사한 자요 구조의 내부의 요소를 순회(traversing)하는 객체
// *배열의 각 인덱스에 대한 값을 가지는 새로운 array iterator 객체를 반환합니다
// ?return 새로운 배열 반복기 객체
//? 1. for...of => https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
// ?for...of 명령문은 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.
// ?변수를 상수로 선언해주지 않아도 잘 나온다
for(value of arrExample.values()){
  console.log(value);
}
// 2. arr.values().next().value
// for(let i = 0; i < arrExample.length; i++){
  // console.log(arrExample.values().next().value);
// } //? 이렇게 히면 꼬부기만 포켓몬리스트 길이만큼 나옴

// console.log(arrExample.values().next().value);
// ?왜 꼬부기만 나오지?
