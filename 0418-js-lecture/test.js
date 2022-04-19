// // 실행창과 폴더가 같아야 한다
// console.log(1+1);
// // 계산기 연습

// let a = 100;
// let b = 200;
// console.log(a+b);
// console.log(b/a);
// // 브라우저의 엔진을 떼어온 것
// // 백엔드의 런타임

let hour = 8;
let day = 5;
let week =4;
console.log(hour*day*week);

// 브라우저의 높이값 중에 스크롤이 10% 이상 넘어가면 스타일을 바꿔줘
// 총 높이 값이 얼마야? 이것을 1/10로 바꿔줘

// 하루 평균 공부할 수 있는 시간
let oneday = 24;
let lunch = 1;
let dinner = 1;
let sleep = 6;
let nap = 1;
console.log((oneday-(hour+lunch+dinner+sleep+nap))*day*week);
let monthStudy = (oneday-(hour+lunch+dinner+sleep+nap))*day*week;
console.log(monthStudy/(day*week));

// 성적, 평균
let sungjuk = [90, 80, 70, 90, 80];
let pyeonggyun = (sungjuk[0]+sungjuk[1]+sungjuk[2]+sungjuk[3]+sungjuk[4])/sungjuk.length;
console.log(pyeonggyun);

let a = 1;
alert(a+1);

