//todo 콘솔에 1, 2, 3, 4, 5, 6 ,7, 8, 9, 10 순서대로 동일하게 찍히도록 하기

// *1. for loop
for (let i = 1; i <= 10; i++) {
  console.log(i); 
}


let i = 1;
// *2. while loop
// *조건식(condition)이 true 값인 동안 실행문(code block)이 실행된다
while (i<10) {  // ?조건이 true일 때까지 실행하므로 i <= 10이란 조건식을 실행하면 10과 같을 때까지 i++이 되므로 11이란 결과값까지 콘솔에 찍히게 되는 것
  console.log(i);
  i++;
}

// *3. do while loop
// !do while루프는 while 루프의 변형
// !조건이 참인지 확인하기 전에 코드 블록을 한 번 실행한 다음 조건이 참인 동안 루프를 반복
do {
  console.log(i);
  i++;
} while (i<=10);