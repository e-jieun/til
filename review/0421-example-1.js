// let coffeeArray = ['아메리카노', '바닐라 라떼', '헤이즐넛 라떼', '허니라떼', '카페모카']

// let text = '이 들어갑니다.';
// let ice = '아이스 음료에는 ';
// let add = '을 추가하면 됩니다.'

// let honeyLatteObject ={
//   coffee: '2샷',
//   milk: '우유',
//   honey: '꿀',
//   ice: '얼음'
// }

// let honeyLatteRecipe = `허니라떼에는 ${honeyLatteObject.coffee}과 ${honeyLatteObject.milk}와 ${honeyLatteObject.honey}${text}`;

// let iceLatteRecipe = `${ice}${honeyLatteObject.ice}${add}`;

// console.log(honeyLatteRecipe);
// console.log(iceLatteRecipe);
// ---------------------------------------------------
// const gradients ={
  //   bread: 1000,
  //   cheese: 500,
  //   ham: 1000,
  //   lettuce: 700,
  //   sauce: 500,
  //   hotSauce: 500,
  //   olive: 1000,
  //   tomato: 1000,
  //   fish: 2000,
  //   patty: 4000
// }
// // 객체에 태그를 넣는다

// let hamburger = gradients.bread+gradients.patty+gradients.lettuce+gradients.tomato+gradients.hotSauce+gradients.cheese;

// let pizza = gradients.bread+gradients.cheese+gradients.sauce+gradients.ham;

// console.log(hamburger);
// console.log(pizza);
// ---------------------------------------------------
// 나만의 김치찌개 레시피
let gradients ={
  kimchi: '김치',
  ham: '스팸',
  tuna: '사조참치',
  sausage: '비엔나소시지',
  sesameOil: '챔기름',
  greenOnion: '대파',
  onion: '양파',
  ramen: '라면사리'
}

let hamKimchi = gradients.kimchi+','+gradients.ham+','+gradients.greenOnion+','+gradients.onion;
let boodaeJjigae = gradients.kimchi+','+gradients.ham+','+gradients.sausage+','+gradients.greenOnion+','+gradients.onion+','+gradients.ramen;
// console.log(`햄 김치찌개에는 ${hamKimchi}가 들어갑니다.`);
console.log(`부대찌개에는 ${boodaeJjigae} 등의 재료가 들어갑니다.`);

let cosmetic = ['토너', '크림', '선크림', '파운데이션', '섀도우', '아이라이너', '틴트', '블러셔', '립밤', '아이브로우', '메이크업 픽서'];

console.log(`스킨케어 순서는 ${cosmetic[0]}, ${cosmetic[1]}을 바르고,`);
console.log(`기초 화장 순서로는 ${cosmetic[2]}, ${cosmetic[3]}을 바릅니다.`);