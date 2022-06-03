// return percent of part value in total value
function returnPercent(value,total){
  let result = (total/value)*100;
  return result;
}
console.log(returnPercent(20, 100));

// return value by percent
function returValue(total, percent){
  let result = (total*percent)/100;
  return result;
  console.log(result);
}

// number add n percent -> number*(1+percent/100);
function numberAddPer(value, percent){
  let result = number*(1+percent/100);
  return result;
}