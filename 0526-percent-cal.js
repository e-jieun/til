// *1. 전체값에서 일부값 퍼센트는?
// *일부값 / 전체값*100
function returnPercent(total, value){
  let result = value/total*100;
  return result;
}
console.log(returnPercent(100, 10)+'%');

// *2. 전체값의 몇 퍼센트는 얼마?
// *전체값 * 몇 퍼센트 / 100
function returnPerValue(total, value){
  let result = total*value/100;
  return result;
}
console.log(returnPerValue(120, 20));

// !3. 숫자를 몇 퍼센트 증가시키는 식?
// !숫자 * (1+몇 퍼센트 / 100)
function increasePer(currentValue, increasePer){
  let result = currentValue*(1+increasePer/100);
  return result;
}
console.log(increasePer(1, 100));

// !4. 숫자를 몇 퍼센트 감소시키는 식?
// !숫자 * (1-몇 퍼센트 / 100)
function decreasePer(currentValue, decreasePer){
  let result = currentValue*(1-decreasePer/100);
  return result;
}
console.log(decreasePer(100, 10));