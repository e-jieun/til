// *선언형 방식
let ajin = [1, 2];
// console.log(ajin.sort((a, b) => b-a));
ajin.reverse();
console.log(ajin);

// let ahjin = [1, 2];
console.log('기본 배열값: '+ahjin);
let ahjin2 = ahjin.reverse();
console.log(ahjin2);

// *명령형 방식
let temp;
let ahjin = [1, 2]; 
temp = ahjin[0];  //temp라는 빈 변수에 아진의 첫 요소를 대입해준다
ahjin[0] = ahjin[1];  //아진의 첫 요소를 아진의 마지막 요소로 대입해준다
ahjin[1] = temp;  //아진의 마지막 요소에 템프를 대입해준다
console.log(ahjin); //[2, 1];