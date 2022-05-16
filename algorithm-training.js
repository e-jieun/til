// todo : Q. pokemonList의 총 길이값이 얼마인지 프로그래밍을 통해서 console에 출력하시오.
// todo : Q. "야도란" 이라는 원소(element)가 몇번째에 있는지 프로그래밍을 통해서 console에 출력하시오.
// todo : Q. "야도란" 이라는 원소(element)를 "메타몽" 이라는 string으로 변환하여 배열 전체를 console을 통해 조회하시오.
// todo : Q. "리자몽"을 pokemonList 맨 마지막 원소로 프로그래밍을 통해 추가하시오. -->

const pokemonList = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '또가스'];

// 1.
console.log(pokemonList.length);  //8

// 2.
// 다 검사해서 배열의 요소에 야도란을 찾아야 한다
for(let i = 0; i<pokemonList.length; i++){
  // console.log('hi');
  if(pokemonList[i] === '야도란'){
    console.log(i);
    // console.log(pokemonList[i]);
  }
}

// 3.
for(let i = 0; i<pokemonList.length; i++){
  // console.log('hi');
  if(pokemonList[i] === '야도란'){
    pokemonList[i] = '메타몽';
    console.log(pokemonList);
  }
}

// 4.
// ?배열의 마지막 요소에 추가하는 방법
// *push로 추가하는 방법
// https://developer-talk.tistory.com/154
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push
pokemonList.push('리자몽');
console.log(pokemonList);