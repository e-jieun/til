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