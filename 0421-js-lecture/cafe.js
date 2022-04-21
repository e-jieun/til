/* 커피원두: 20000
우유:30000
물: 100
설탕: 3000
시럽: 200
시나몬: 500
빨대: 1000
머그컵: 300000
플라스틱컵: 100000
얼음: 200000 */

// Obj라고 많이 표시 
const jaeryoObj = {
  coffeebean: 20000,
  milk: 30000,
  water: 100,
  sugar: 3000,
  syrup: 200,
  cinnamon: 500,
  mugCup: 300000,
  takeoutCup: 100000,
  ice: 20000, 
  whip: 5000,
  javachip: 500,
  chocoPowder: 2000,
  greenteaPowder: 3000
}

const americano = {
  one: jaeryoObj.coffeebean,
  two: jaeryoObj.water,
  three: jaeryoObj.takeoutCup
}

let americanoPrice = americano.one+americano.two+americano.three;

// console.log(jaeryoObj);
// console.log(americanoPrice);


// console.log(americanoPrice+jaeryoObj.ice);
// !programming

// 객체를 사용
// 객체 지향형 프로그래밍(object oriented programming)
// JAVA !== JS

let jieunCoffee = (americanoPrice-jaeryoObj.water)+jaeryoObj.milk+jaeryoObj.ice+jaeryoObj.syrup+jaeryoObj.whip;

let javachipPrapuccino = (americanoPrice-jaeryoObj.water-jaeryoObj.coffeebean)+jaeryoObj.chocoPowder+jaeryoObj.milk+jaeryoObj.ice+jaeryoObj.whip+jaeryoObj.javachip;

let greenteaPrapuccino = (americanoPrice-jaeryoObj.water-jaeryoObj.coffeebean)+jaeryoObj.greenteaPowder+jaeryoObj.milk+jaeryoObj.ice+jaeryoObj.whip+jaeryoObj.greenteaPowder;

// let ment = '이 음료의 가격은';

// console.log(jieunCoffee);
// console.log(javachipPrapuccino);
// console.log(greenteaPrapuccino);

if(americanoPrice > 100000){
  console.log(`아메리카노 값은 ${americanoPrice}원 입니다. 구매하시겠어요?`);
} else{
  console.log(`아메리카노 값은 ${americanoPrice}입니다.`)
}

/* 연습 포인트: 작성방식은 숙달이 필요하다
1. 객체 작성해보기
2. 객체 키값 꺼내보기
3.  */
// *에러가 뜨면 어디에 틀렸는지 다 나오기 때문에 에러 싸인을 확인하기
