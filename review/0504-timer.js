let current = 0;

// 1s씩 증가되는 카운트업 타이머
let timer = setInterval(function(){
  console.log(current);
  current++;
  // 1min이 되면 종료해줘
  if(current === 60){
    clearInterval(timer);
  }
}, 1000);

current = 0;

// 1s씩 증가되는 카운트업 타이머
timer = setInterval(function(){
  console.log(current);
  current++;
  // 1min이 되면 종료해줘
  if(current === 60){
    clearInterval(timer);
  }
}, 16); //16을 주기로 주면 초당 60프레임이 된다 => 애니메이션 만들 때 쓰이는 방법

// 터미널 종료법
// window: ctrl+c
// mac: control+c