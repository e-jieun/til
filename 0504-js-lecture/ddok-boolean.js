
let current = true;
// 지역 변수로 선언을 해주면 scope 안에서만 작동하지만 그럴 경우에느느 clearInterval을 적용할 버튼 B를 타이머 안으로 이동해주는 것도 방법이다
// 전역 변수로 선언해줬던 부분
// let timer;
// button a를 클릭
// btnA.addEventListener('click', function(){
  // 타이머는 주기적으로 반복해주는 setInterval();을 대입한다
  const timer = setInterval(function(){
    if(current === true){
      console.log('똑');
      console.log(current);
      current = false;
    } else{
      console.log('딱');
      console.log(current);
      current = true;
    }
  }, 1000)
// });