const pokemonList = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '또가스'];

// todo : Q. pokemonList의 총 길이값이 얼마인지 프로그래밍을 통해서 console에 출력하시오.

// console.log(pokemonList.length);

// *length를 사용하지 않고
let isStatus = true;
let count = 0;
// *while
// 참인 경우에 계속 돌려, 횟수제한이 없음
// while(isStatus === true && count < 5){  // 둘 다 참일 때만 true
//   console.log('test');
//   if(pokemonList[count] !== ''){
//     count++;
//   } else{
//     isStatus = false;
//   }
// }

// todo : Q. "야도란" 이라는 원소(element)가 몇번째에 있는지 프로그래밍을 통해서 console에 출력하시오.

// 선언형 프로그래밍
// !배열 메서드에서 주요한 개념을 찾아 사용한 것
// !인덱스 오브는 검색하면 잘 나온다, 명령형을 먼저 이해해야한다
console.log(pokemonList.indexOf('야도란'));
// !선언형 메서드 외우기

// 절차형, 명령형 프로그래밍
for(let i = 0; i < pokemonList.length; i++){
  if(pokemonList[i] === '야도란'){
    console.log(i);
  }
}

// todo : Q. "야도란" 이라는 원소(element)를 "메타몽" 이라는 string으로 변환하여 배열 전체를 console을 통해 조회하시오.

for(let i = 0; i < pokemonList.length; i++){
  if(pokemonList[i] === '야도란'){
    pokemonList[i] = '메타몽';
  }
}

// todo : Q. "리자몽"을 pokemonList 맨 마지막 원소로 프로그래밍을 통해 추가하시오.
// !push() ===
pokemonList[pokemonList.length] = '리자몽';
console.log(pokemonList);
