// console.log('test');
// const memberOne = {
//   name: '손만충',
//   gender: 'pokemon',
//   age: 58,
//   deskNumber: 30,
//   glasses: true,
//   married: 'dolsing',
//   talmo: false,
//   smartphone: 'folder phone'
// }
// const memberTwo = {
//   name: '이채연',
//   gender: 'digimon',
//   age: 10,
//   deskNumber: 31,
//   glasses: true,
//   married: 'no',
//   talmo: false,
//   smartphone: 'iphone'
// }

// console.log(memberOne.name);
// console.log(memberTwo.name);

// *생성자 함수: 생성자 만들어주는 거푸집 -> constructor function
// *생성자 함수는 객체를 찍어주는 거푸집 
// *석고 뜨는 함수다

// *생성자 함수는 관습상 pascal type
// !array, number 쓸 때
// ! 거푸집을 만든 것
function Member(name, gender, age, deskNumber, glasses, married, talmo, smartphone){
  this.name = name,
  this.gender = gender,
  this.age = age,
  this.deskNumber = deskNumber,
  this.glasses = glasses,
  this.married = married,
  this.talmo = talmo,
  this.smartphone = smartphone
}

// 스니펫
const memberOne = new Member('김주은', '파이리', 26, 31, 'no', 'no', 'no', 'iphone');
console.dir(memberOne);

// 날짜를 가져와주는
const testOne = new Date();
// console.dir(testOne);
// console.dir(testOne.getHours());

// 시간, 메시지
// !setInterval()로 반복하면 시간마다 띄우거나 시계, 타이머
function ampm(hour, msg){
  if(hour > 12){
    console.log(`${msg} ${hour-12}시 입니다`);
    console.log(memberOne.smartphone);
  } else{
    console.log(`${msg} ${hour}시 입니다`);
  }
}

// 객체지향언어의 클래스라고 하는 것 => JS는 모두 객체다
// ampm(testOne.getHours(), '오후입니다');

// 객체 안의 함수  === 메서드
// console.dir(Array().);

// *객체 dateinstance를 불러오고 일주일의 총 시간을 구한다
// 일주일의 총 시간
console.dir(testOne);
console.log(testOne.getSeconds());
const week = new Date(2022, 5, 25);
console.log('<---here');
console.log(testOne.getDay());
const birth = new Date(1995, 8, 27);
console.log(week.getTime());

function Week(hour, min, sec, day){
  this.hour = hour,
  this.min = min,
  this.sec = sec,
  this.day = day,
  this.all = hour*min*sec
}

// class Week {
//   constructor(hour, min, sec, day) {
//     this.hour = hour,
//       this.min = min,
//       this.sec = sec,
//       this.day = day,
//       this.all = hour * min * sec;
//   }
// }
const weektime = new Week(24, 60, 60, 7);
console.dir(weektime);
// console.log(weektime);

