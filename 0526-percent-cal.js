// *1. 전체값에서 일부값 퍼센트는?
// *일부값 / 전체값*100
function returnPercent(total, value){
  return value/total*100;
}

// *2. 전체값의 몇 퍼센트는 얼마?
// *전체값 * 몇 퍼센트 / 100
function returnPerValue(total, value){
  return total*value/100;
}


// *3. 숫자를 몇 퍼센트 증가시키는 식?
// *숫자 * (1+몇 퍼센트 / 100)
function increasePer(currentValue, increasePer){
  return currentValue*(1+increasePer/100);
}

// *4. 숫자를 몇 퍼센트 감소시키는 식?
// *숫자 * (1-몇 퍼센트 / 100)
function decreasePer(currentValue, decreasePer){
  return currentValue*(1-decreasePer/100);
}