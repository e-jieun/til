function a() {
  // promise 생성자 함수를 불러온다
  // promise 매개변수는 콜백함수
  // 매개변수 resolve, reject가 옴
  return new Promise(function(resolve, reject){
    // resolve('hi');  //일련의 성공을 뜻함
    setTimeout(function(){
      // console.log('실행됨');
      // resolve('bye'); // ?Promise { <pending> }
      // ?실행을 일단 멈춘다라는 뜻의 pending(대기하다)
      // console.log(resolve('bye'));  //?undefined
      console.log('지금 함수 a()가 실행됨');
      resolve('성민씨 메롱'); //약속이 걸려있는 string
    }, 4000);
  });
}

// console.log(a()); //resolver undefined
// a();
// ?promise: 약속
// ?실행을 일단 멈춘다, 호출 순서를 !사람이 작성한 것에 맡기는 것!
// 비동기에게는 promise가 답이다

// function chaining => 함수를 연결시키는 방식
// ?.then()
a().then(function(data){  //data === '성민씨 메롱' => 메갠변수가 됐음
  // console.log(data);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('여긴 함수 then()에서 실행된 것');
      resolve(data);
    }, 1000);
  });
}).then(function(data){  //data === '성민씨 메롱' => 메갠변수가 됐음
  // console.log(data);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('1.여긴 함수 then()에서 실행된 것');
      resolve(data);
    }, 1000);
  });
}).then(function(data){  //data === '성민씨 메롱' => 메갠변수가 됐음
  // console.log(data);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('2.여긴 함수 then()에서 실행된 것');
      resolve(data);
    }, 1000);
  });
}).then(function(data){  //data === '성민씨 메롱' => 메갠변수가 됐음
  // console.log(data);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('3.여긴 함수 then()에서 실행된 것');
      resolve(data);
    }, 1000);
  });
}).then(function(data){  //data === '성민씨 메롱' => 메갠변수가 됐음
  // console.log(data);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('4.여긴 함수 then()에서 실행된 것');
      resolve(data);
    }, 1000);
  });
}).then(function(data){  //data === '성민씨 메롱' => 메갠변수가 됐음
  // console.log(data);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('5.여긴 함수 then()에서 실행된 것');
      resolve(data);
    }, 1000);
  });
});

// ?Promise를 달면 순서를 지키는 동기 방식으로 실행된다
// ?=>순서를 지키도록 만들고 싶다면 promise()를 고려한다
// ?=>뒤죽박죽 비동기 방식의 setInterval(), setTimeout()을 핸들링하기 편해진다
// ?=>return 달고, new Promise() 달고, 콜백함수 달고, resolve, reject를 달고
// 한 줄만 더 실행하기 위해서는 콜백이 나을 수도

// ?promise().then().then().then()의 구조가 나오게 된다
// ?1. return에 promise를 달면 순서를 지킨다
// ?2. then()이 붙은 순서로 계속 순서를 지키게끔 만들 수 있다