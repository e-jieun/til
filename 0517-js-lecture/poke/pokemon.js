const pokemon = require('pokemon');

console.log(pokemon.all());
console.log(pokemon.getName(120));
// console.log(pokemon.getId('Nidorino', 'ja'));
console.log(pokemon.all('fr'));
console.log(pokemon.all().at(-1));
console.log(pokemon.all('ko').sort());
console.log(pokemon.all('ko').indexOf('나무킹'));

// 잘라내고 끼워넣기
console.log(pokemon.all('ko').indexOf('나시'));

// 문자열 길이가 젤 긴 것
// 전체 포켓몬 중에서 문자열 길이가 제일 긴 것
// ?https://kangdanne.tistory.com/108
pokemon.all('en').forEach(function(value){
  console.log(value.split('').length);
  // 젤 긴 거는 어떻게 찾지?
  if(value.split('').length > 10){
    let lengthValue = new Array();
    lengthValue.push(value);
    console.log(Math.max(value.split('').length)+'입니다');
  }
})

// 갸라도스는 어디에 있나?
console.log('갸라도스는 '+pokemon.all('ko').findIndex(element => element === '갸라도스')+'번에 있다');

console.log(pokemon.all().push('안녕'));
console.log(pokemon.all().concat('포켓몬빵').at(-1));
console.log(pokemon.all().at(-1));