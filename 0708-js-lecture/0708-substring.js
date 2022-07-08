let str = '12345px';
let str1 = '1234px';

function substring(elem){
  return elem.substring(0, elem.length-2);
}
// console.log(parseInt(substring(str)));
// console.log(substring(str1));

function matchStr(str, matchStr){
  return str.match(`${matchStr}`);
}
console.log(matchStr(str, '1'));