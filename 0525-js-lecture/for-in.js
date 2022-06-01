const pokemon = {
  a: 'pikachu', 
  b: 'chicorita',
  c: 'ggoboogi',
  d: 'kingcrab'
}

// ?객체의 for문 돌리기
// *작성법 중의 하나 -> js, python만 지원
// for()
// *1. for in() ~안에
// *2. for of() ~중의

console.log(pokemon.length);  //undefined
// ?객체는 length를 쓸 수는 없다

// *for-in syntax: props || key(그냥 객체의 키 값)라고 작성 in 내가 돌리고 싶은 객체 
// !명령방식이 아니라 선언방식 == foreach
for(let props in pokemon){
  // console.log(props);
  console.log(typeof props);  //!props(객체의 키값)는 !문자열!이다, 배열의 키 값은 !숫자!이다
  // *=== 'a'와 같이 props는 사실 
  console.log(pokemon.a);
  // *접근자 중에 
  // Element.log();
  console.log(pokemon[props]);  //꼬부기, 파이리, 치코리타, 리자몽
}

// ?배열이 만들어진 이유 -> 문자열로 사용하기 불편하기 때문 => 배열의 존재 이유
// !표기법이 다를 수 있다
// *객체에 키 값에 접근하는 방식은 사실 두 가지였다
console.log(pokemon['c']);  //*대괄호 표기법: polypill => example[key] -> 객체를 가공하는 경우엔 사용(객체지향을 하는 경우만 많이 사용) 
console.log(pokemon.c); //*점 표기법: example.key
// !객체의 키 값을 문자열로 접근하기 위해 
// !객체의 키 값은 문자열이다
// *=> 객체는 사실 두가지의 키 접근이 있었다


// !for(): 프로그램 일반 제어문에 가까움
// *for(in): 자바스크립트 지원하는 특수한 제어
// *for(of): 자바스크립트 지원하는 특수한 제어
// !forEach(): 배열에 쓸 수 밖에 없는 상황


// todo: 값들만으로 배열을 만들고 싶어
// ?배열하나를 빈 칸으로 만들어 준다
let pokemonArr = [];
// ?값들만으로 배열을 만들고 싶어
for(let props in pokemon){
    console.log(pokemon[props]);
    // ?배열의 마지막 요소로 계속해서 추가해주는 부분 .push()
    pokemonArr.push(pokemon[props]);
  }
  console.log(pokemonArr);
  
  
  // !error: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/is_not_iterable => 반복이 불가능한 대상이라는 에러 메시지, 반복가능한 객체가 아니라는 뜻이었다
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
  const iterator = pokemon.values();
  console.log('포켓몬 배열의 값을 담은 변수');
  console.log(iterator.values);
  
  // 배열의 값을 구할 때 배열의 값을 반복해줄 변수에 배열의 값을 넣어준다
  
  // ?인덱스로 접근 === 배열
  for(let props of iterator){
    console.log('for of를 사용한 부분');
    console.log(iterator[props]);
  }
  console.log(iterator);