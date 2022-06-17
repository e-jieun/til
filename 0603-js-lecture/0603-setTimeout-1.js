// todo: 비동기 함수인 setTimeout()을 어떻게 순차적으로 작동하도록 만들어 줄 수 있을까?
// console에 찍히는 원래 의도한 나와야 하는 순서다

let aTimer = setTimeout(() => {
  console.log(1);
  // 콜백함수를 사용해서 실행시키는 구조를 사용한 부분, 가용성이 떨어짐
  // ?실행주기와 관계없이 실행되는 콜백함수로 실행되는 것
  let bTimer = setTimeout(() => {
    console.log(2);
    let cTimer = setTimeout(() => {
      console.log(3);
    }, 1000);
  }, 2000);
}, 3000);

