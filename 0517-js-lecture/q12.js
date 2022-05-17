const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// Todo : Q-1. "of" 라는 문자열이 몇번 나오는지 console에 출력하세요.
console.log(dummyText.filter(word => word === 'of').length+'번');

// Todo : Q-2. "dummy" 라는 문자열 원소를 모두 "sementic" 이라는 단어로 바꾸세요.
// 1. dummy를 찾아내고 => 전체 안에서 값을 찾아낸다
// ?try 1.
// dummyText.filter(word => word === 'dummy').forEach(word => word === 'sementic');
// dummyText.forEach(dummyChange);
// function dummyChange(element){
//   if(element === 'dummy'){
//     element = 'sementic';
//   }
// }
// ?try 2.
// dummyText.splice('dummy',2, 'sementic');
console.log(dummyText.filter(word => word === 'dummy'));
// 2. 모두 sementic으로 변경한다
// !map(): 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
// *map(각 요소마다 적용시킬 콜백함수)
// ?console.log(dummyText.filter(word => word === 'dummy').map(word => word = 'sementic'));
// ?배열 전체를 불러와도 변경된 모습으로 보이려면 어떻게 해야할까

let textChg = dummyText.map(function(value){
  if(value === 'dummy'){
    value = 'sementic';
  }
})
// ?forEach()로 사용하면 이렇게 각각에 적용해서 배열에 담기지 않고 적용된 요소로 출력된다
// dummyText.forEach(function(value){
//   if(value === 'dummy'){
//     value = 'sementic';
//     console.log(value);
//   }
// })

// Todo : Q-3. "the" 라는 원소 다음에 "web" 이라는 단어가 추가되도록 배열을 조정하세요.
// 1. the라는 원소를 찾아내고 
// *만약 원소가 'the'라면
console.log(dummyText.filter(word => word === 'the'));
// ?배열을 조정해야하니까 새 배열로 받는 건 아닌 것 같다
// 2. web이라는 단어가 추가되도록 
// *'the'라는 원소 다음에 'web'이란 단어를 추가해줘
// console.log(dummyText.filter(word => word === 'the').concat('web'));  //?한번만 추가됨
// console.log(dummyText.filter(word => word === 'the').push('web'));  //?13?
// ?the 다음에 계속해서 추가되도록 해야하는데 그럼 각각에 적용해서 돌려주는 map(), forEach()를 사용해야할 것 같다
// forEach()
// *만약 dummyText의 요소가 the라면 => 판단하는 것
  // dummyText.reduce(functionFind);
  // function functionFind(element){
  //   if(element === 'the'){
  //     console.log(element);
  //     console.log(dummyText);
  //   }
  // }
  // if(dummyText.filter(word => word === 'the')){
  //   dummyText.forEach(function(){
  //     dummyText.push('web');
  //   })
  // }
// *the의 각각에 web이란 요소를 추가해줘 => forEach(), map()

// 1. forEach()
// 각각의 값에 적용해주는 forEach
dummyText.forEach(function(value, index){
  // 만약 값이 'the'와 같으면 
  if(value === 'the'){
    // dummyText의 현재 인덱스+1번에 'web'이란 글자를 추가해줘
    dummyText[index+1] = 'web';
  }
})
console.log(dummyText);

// Todo : Q-5. 배열 속 원소들의 총 글자 갯수를 console에 출력하세요.
// *join()을 사용한 방법
// 1. 원소들을 한 스트링으로 만든다
// 2. 글자갯수를 출력한다
// ?왜 join()dmfh 합치면 더 많이 나오는가?
// ?=>문자열 없이 공란으로 합쳤을 때는 배열에 있는 쉼표가 모두 합쳐져서 쉼표까지 세어주면서 더 길이가 더 길어졌던 것
console.log(dummyText.join(''));
console.log(dummyText.join('').length);
// ===
const textJoin = dummyText.join('');
console.log(textJoin.length);

// !reduce()를 사용한 방법
// !텍스트의 길이를 세줄 수 있도록 dummyText를 누적해서 더해준다 => 그러면 join()처럼 배열이 문자열로 누적해서 합체된다
const countTextLength = dummyText.reduce(function(before, current){
  return before+current;
})
console.log(countTextLength);
console.log(countTextLength.length);