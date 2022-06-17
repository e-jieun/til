// todo: 비동기 함수인 setTimeout()을 어떻게 순차적으로 작동하도록 만들어 줄 수 있을까?
// console에 찍히는 원래 의도한 나와야 하는 순서다

let aTimer = setTimeout(() => {
  console.log(1);
}, 3000);

let bTimer = setTimeout(() => {
  console.log(2);
}, 2000);

let cTimer = setTimeout(() => {
  console.log(3);
}, 1000);

// ?거꾸로 나온다 => 딜레이 타임에 의해서 비동기로 처리가 되고 있기 때문이다, 딜레이가 적은 순서대로 처리가 됐다
// 그러나 의도하는 바는 동기방식(작성한 순서)대로 출력을 원하고 있는 것

