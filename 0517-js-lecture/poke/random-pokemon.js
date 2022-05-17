const pokemon = require('pokemon');

console.log(pokemon.all());
console.log(pokemon.getName(100, "ja"));

function randomPokemon(minStart, maxArrayLength) {
  let result;
  if(typeof minStart === "number" && typeof maxArrayLength === "number") {
    min = Math.ceil(minStart);
    max = Math.floor(maxArrayLength);
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }
}
const getPokemon = pokemon.getName(randomPokemon(1, pokemon.all().length), "ko"); 
console.log(`현재 포켓몬스터는 ${pokemon.all().length}개 있습니다.`);
console.log(getPokemon);

console.log(pokemon.all().slice(0, 10));
// console.log(pokemon.all().join());
console.log(pokemon.languages.has('ko'));
console.log(pokemon.all().splice(0, 2, 'hi'));




