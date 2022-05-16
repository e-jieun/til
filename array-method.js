const pokemonList = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '또가스'];

// 배열 메서드
// todo: 요소를 더하거나 지우기
// push(...items); -> 맨 끝에 요소 추가
pokemonList.push('포켓몬 끝!');
// !여러 개도 추가가 된다
pokemonList.push('vhzptahs', '1234');

// .pop(); -> 맨 끝 요소 추출
console.log(pokemonList.pop()); // 맨 끝 요소를 추출하기

// .shift(); -> 첫 요소 추출
console.log(pokemonList.shift()); // 첫 요소를 추출하기

// .unshift(...items); -> 맨 앞에 요소 추가
pokemonList.unshift('피카츄');

// .splice(pos, deleteCount, ...items);
// .splice(몇번부터, 몇개의 요소를 지우고, 'items'를 추가하기)
// *array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
pokemonList.splice(1, 2, '안녕', '!');
console.log(pokemonList); //인덱스 1번부터 라이츄, 파이리 두 개 요소를 지우고, '안녕'을 추가한다

// .slice(start, end);
// *arr.slice([begin[, end]]); // end인 인덱스는 미포함, 음수도 사용이 된다 
// *slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함, end 앞까지의 요소 복사해 새로운 배열로 만듬)에 대한 얕은 복사본을 새로운 배열 객체로 반환, 원본 배열은 바뀌지 않습니다
console.log(pokemonList.slice(1, 2)); //
console.log(pokemonList.slice(-2)); //피죤투, 또가스
console.log(pokemonList.slice()); //전체 배열이 반환됨

// .concat(...items);
// 배열의 모든 요소를 복사하고 요소를 추가해 새로운 배열을 만든 후 반환, items가 배열이면 이 배열의 인수를 기존 배열에 더해줌
console.log(pokemonList.concat('hi'));
console.log(pokemonList.concat(['1', '2', '3']));

// .indexOf/lastIndexOf(item, pos);
// *arr.indexOf(searchElement[, fromIndex]);
// *pos부터 원하는 item을 찾음, 찾으면 해당 인덱스를 아니면 -1을 반환함
// console.log(pokemonList.indexOf('!'));  //2
// console.log(pokemonList.indexOf('뮤츠')); //-1
// console.log(pokemonList.lastIndexOf('꼬부기')); //3

// .findIndex(classback);
// !주어진 판별 함수를 !만족하는 배열의 첫번째 요소!에 대한 !인덱스!를 반환, 만족하는 요소가 없으면 -1을 반환
const num = [1, 23, 22, 56, 100];
const isLargeNumber = (element) => element > 23;
// *arr.findIndex(callback(element[, index[, array]])[, thisArg])
console.log(num.findIndex(isLargeNumber));

// todo: 배열 전체 순회하기
// forEach();
// forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다
// *arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// ?console.log(pokemonList.forEach());
// !pokemonList.forEach(foreach); //콜백함수가 주요 인수로 들어간다
// !function foreach(element){
//   !console.log(element);
// !}

// .from();
// *Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다

// .isArray();
// *Array.isArray() 메서드는 인자가 배열인지 판별해줌
// *return boolean
console.log(Array.isArray(pokemonList));  //true

// .every()
// .at()
// *at() 메서드는 정수 값을 받아, 배열에서 해당 값에 해당하는 인덱스의 요소를 반환합니다. 양수와 음수 모두 지정할 수 있고, 음수 값의 경우 배열의 뒤에서부터 인덱스를 셉니다.
// *at() 메서드의 존재가 대괄호 표기법을 부정하는 것은 아닙니다. 예를 들어 array[0]은 문제 없이 배열의 첫 요소를 반환합니다. 그러나 맨 마지막 요소를 가져오고 싶을 때 length 속성을 사용해 array[array.length - 1]을 하는 대신, 짧게 array.at(-1)을 사용할 수 있습니다.
console.log(pokemonList.at[1]); //undefined

// .filter()

// .includes()
// *arr.includes(valueToFind[, fromIndex])
// *배열이 특정 요소(인수 자리의)를 포함하고 있는지 판별함
console.log(pokemonList.includes('피카츄'));  //true

// .join() <-> .split()
console.log(pokemonList[1].split(''));
// .join의 인수에 들어갈 스트링으로 문자열을 모두 합쳐준다
console.log(pokemonList.join('+'));
// .map()
// .reduce()
// .some()
// .sort()
// .toString()
// .values()