let nuri = 100;

// todo: 둘 다 동기방식으로 1초 뒤에 콘솔에 출력
// ?setTimeout
// todo: 1. 1번 행동에는 nuri가 10이 덧셈되고 콘솔에 출력 => 110
// ?setTimeout promise() resolve()
// todo: 2. 2번 행동에는 nuri가 30을 빼고, 콘솔에 출력 => 80
// ?.then()에 promise()
// todo: 2초간 두번의 계산을 진행시킨다

// function calA() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(nuri + 10);
//       resolve(nuri += 10);
//     }, 1000);
//   })
// };

// calA().then(() => {
//   return new Promise((resolve, reject) => {
//     setTimeout((data) => {
//       console.log(nuri - 30);
//       resolve(data);
//     }, 1000);
//   })
// });

function first() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      nuri = nuri+10;
      console.log(nuri);
      resolve();
    }, 1000);
  });
};
// resolve() 되고 나서 .then()
first().then(function (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      nuri = nuri-30;
      console.log(nuri);
      resolve();
    }, 1000);
  });
});