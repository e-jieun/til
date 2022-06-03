// 전체값에서 일부값 퍼센트 구하기
// 1. (일부값/전체값)*100
function returnPercent(value,total){
  let result = (value/total)*100;
  return result;
}
console.log(returnPercent(20, 100));

// return value by percent
function returnValue(total, percent){
  let result = (total*percent)/100;
  return result;
}
console.log(returnValue(100, 20));
// number add n percent -> number*(1+percent/100);
function numberAddPer(value, percent){
  let result = number*(1+percent/100);
  return result;
}