let coffee = 4100;
let cake = 6000;
let week = 5;
let month = 4;

// console.log((coffee+cake)*week);

// 함수 선언 = function declaration
function gansickBe(a, b, c, d){
  return (a+b)*c*d;
}

function coffeeEveryday(a, b, c){
  return a*b*c;
}

// 함수 호출 = function calling
console.log(gansickBe(coffee, cake, week, month));
console.log(coffeeEveryday(coffee,week,month));

function sum(a, b){
  return a+b;
}

console.log(sum(1, 2));
console.log(sum(827, 522));
console.log(sum(20, 12));
