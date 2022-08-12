const person = {
  name: 'jieun',
  age: 28,
  birth: 950827
}

function printName(x){
  console.log(x);
}
function printAge(x){
  console.log(x);
}
function printBirth(x){
  console.log(x);
}

// 1.
function displayPerson(person) {
  const name = person.name;
  const age = person.age;
  const birth = person.birth;
  printName(name);
  printAge(age);
  printBirth(birth);
}
displayPerson(person);

// 2.
function displayPersonOne(person){
  const {name, age, birth} = person;
  // *=> person이라는 object에 있는 property들이 자동으로 적용이 된다
  printName(name);
  printAge(age);
  printBirth(birth);
}
displayPersonOne(person);

// *구조 분해 할당: 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
let a, b, c;

[a, b, c] = [10, 20, 1];
console.log(a);
console.log(b);
console.log(c);

[a, b, ...args] = [a, b, 30, 40, 50];
console.log(args);

