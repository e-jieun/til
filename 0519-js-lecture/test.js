let obj = {
  a: 1,
  b: 2,
  c: 1,
  d: 2,
  e: 'woeo',
  // 
  sum: function(one, two){
    if(typeof one === 'number' && typeof two === 'number'){
      return one+two;
    } else{
      console.error('datatype error');
    }
  }
}

console.log(obj.a === obj.b); //false
console.log(obj.a !== obj.b); //true
console.log(obj.a === obj.b || obj.a == obj.c); //true
console.log(obj.a === obj.b && obj.a == obj.c); //false
console.log(obj.sum(obj.a, obj.b));
console.log(obj.sum(obj.a, obj.e));


