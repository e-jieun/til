// *String to Number type
let stringNumValue = `1000`;

// *parseInt
// const change = parseInt(stringNumValue);
const change = (elem) => {
  return parseInt(elem);
};
console.log(change(stringNumValue));
console.log(typeof change(stringNumValue));
// console.log(change);
// console.log(typeof change);

// *Number()
console.log(Number(stringNumValue));
console.log(typeof Number(stringNumValue));